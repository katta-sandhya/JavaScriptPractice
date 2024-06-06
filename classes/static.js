class VoterEligibility {
    static votingAge = 18;

    static canVote(age) {
        return age >= VoterEligibility.votingAge;
    }
}

// Create an array of ages to check
const ages = [16, 18, 20, 15, 30, 17];

// Define a regular function to check voting eligibility
function checkVotingEligibility(age) {
    if (VoterEligibility.canVote(age)) {
        console.log(`Age ${age} is eligible to vote.`);
    } else {
        console.log(`Age ${age} is not eligible to vote.`);
    }
}

// Use the regular function in the forEach method
ages.forEach(checkVotingEligibility);
