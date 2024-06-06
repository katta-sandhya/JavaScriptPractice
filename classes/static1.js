class VoterEligibility {
    static votingAge = 18;

    static canVote(age) {
        return age >= VoterEligibility.votingAge;
    }
}

// Accessing static variable and method
console.log(VoterEligibility.votingAge); // Output: 18
console.log(VoterEligibility.canVote(20)); // Output: true