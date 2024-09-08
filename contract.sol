contract address = 0x400b52d8590408ca5d8d5b58c378153b5dab0d0a

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts-upgradeable@4.9.3/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable@4.9.3/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable@4.9.3/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable@4.9.3/proxy/utils/Initializable.sol";

contract EducationalMarketplace is Initializable, ERC1155Upgradeable, OwnableUpgradeable, ReentrancyGuardUpgradeable {
    struct Course {
        address creator;
        uint256 price;
        bool isActive;
        string contentURI;
    }

    mapping(uint256 => Course) public courses;
    mapping(address => mapping(uint256 => bool)) public userPurchases;
    uint256 public nextCourseId;

    event CoursePublished(uint256 indexed courseId, address indexed creator, uint256 price, string contentURI);
    event CoursePurchased(uint256 indexed courseId, address indexed buyer);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(string memory uri) public initializer {
        __ERC1155_init(uri);
        __Ownable_init();
        __ReentrancyGuard_init();
        nextCourseId = 1;
    }

    function publishCourse(uint256 price, string memory contentURI) external {
        require(price > 0, "Price must be greater than zero");
        uint256 courseId = nextCourseId;
        courses[courseId] = Course({
            creator: msg.sender,
            price: price,
            isActive: true,
            contentURI: contentURI
        });
        emit CoursePublished(courseId, msg.sender, price, contentURI);
        nextCourseId++;
    }

    function purchaseCourse(uint256 courseId) external payable nonReentrant {
        Course storage course = courses[courseId];
        require(course.isActive, "Course is not active");
        require(msg.value >= course.price, "Insufficient payment");
        require(!userPurchases[msg.sender][courseId], "Course already purchased");

        userPurchases[msg.sender][courseId] = true;
        payable(course.creator).transfer(msg.value);
        emit CoursePurchased(courseId, msg.sender);
    }

    function getCourseURI(uint256 courseId) external view returns (string memory) {
        require(userPurchases[msg.sender][courseId], "You don't own this course");
        return courses[courseId].contentURI;
    }

    function updateCoursePrice(uint256 courseId, uint256 newPrice) external {
        require(courses[courseId].creator == msg.sender, "Only creator can update price");
        require(newPrice > 0, "Price must be greater than zero");
        courses[courseId].price = newPrice;
    }

    function toggleCourseStatus(uint256 courseId) external {
        require(courses[courseId].creator == msg.sender, "Only creator can toggle status");
        courses[courseId].isActive = !courses[courseId].isActive;
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        payable(owner()).transfer(balance);
    }
}