// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ElectYourLeader {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    mapping(address => bool) public voters;
    mapping(uint256 => Candidate) public candidates;
    uint256 public candidatesCount;
    address public owner;

    event CandidateRegistered(uint256 indexed id, string name);
    event Voted(address indexed voter, uint256 candidateId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerCandidate(string memory _name) external onlyOwner {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
        emit CandidateRegistered(candidatesCount, _name);
    }

    function vote(uint256 _candidateId) external {
        require(!voters[msg.sender], "Already voted.");
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID.");

        candidates[_candidateId].voteCount++;
        voters[msg.sender] = true;
        emit Voted(msg.sender, _candidateId);
    }

    function getCandidatesCount() external view returns (uint256) {
        return candidatesCount;
    }

    function getCandidate(uint256 _candidateId) external view returns (uint256 id, string memory name, uint256 voteCount) {
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID.");
        Candidate storage candidate = candidates[_candidateId];
        return (candidate.id, candidate.name, candidate.voteCount);
    }

    function hasUserVoted(address _voter) external view returns (bool) {
        return voters[_voter];
    }
}
