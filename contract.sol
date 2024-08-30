contract address = 0x0192a6b655e4f92aac6e3a1c6177e43a2fd90093

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable@4.8.0/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable@4.8.0/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable@4.8.0/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable@4.8.0/proxy/utils/Initializable.sol";

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
        __Ownable_init_unchained();
        __ReentrancyGuard_init_unchained();
        nextCourseId = 1;
    }

    function publishCourse(uint256 _price, string memory _contentURI) external {
        require(_price > 0, "Price must be greater than zero");
        uint256 courseId = nextCourseId;
        courses[courseId] = Course({
            creator: msg.sender,
            price: _price,
            isActive: true,
            contentURI: _contentURI
        });
        emit CoursePublished(courseId, msg.sender, _price, _contentURI);
        nextCourseId++;
    }

    function purchaseCourse(uint256 _courseId) external payable nonReentrant {
        Course storage course = courses[_courseId];
        require(course.isActive, "Course is not active");
        require(msg.value >= course.price, "Insufficient payment");
        require(!userPurchases[msg.sender][_courseId], "Course already purchased");

        userPurchases[msg.sender][_courseId] = true;
        payable(course.creator).transfer(msg.value);

        emit CoursePurchased(_courseId, msg.sender);
    }

    function getCourseURI(uint256 _courseId) external view returns (string memory) {
        require(userPurchases[msg.sender][_courseId], "You don't own this course");
        return courses[_courseId].contentURI;
    }

    function updateCoursePrice(uint256 _courseId, uint256 _newPrice) external {
        require(courses[_courseId].creator == msg.sender, "Only creator can update price");
        require(_newPrice > 0, "Price must be greater than zero");

        courses[_courseId].price = _newPrice;
    }

    function toggleCourseStatus(uint256 _courseId) external {
        require(courses[_courseId].creator == msg.sender, "Only creator can toggle status");

        courses[_courseId].isActive = !courses[_courseId].isActive;
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        payable(owner()).transfer(balance);
    }
}