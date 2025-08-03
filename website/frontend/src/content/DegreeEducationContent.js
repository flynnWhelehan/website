const FIRST_YEAR_MODULES = {
    objectOrientedProgrammingI: {
        title: "Object Oriented Programming I",
        credits: 15,
        link: "/degree-modules/object-oriented-programming-i.pdf"
    },
    objectOrientedProgrammingII: {
        title: "Object Oriented Programming II", 
        credits: 15,
        link: "/degree-modules/object-oriented-programming-ii.pdf"
    },
    programmingLaboratory: {
        title: "Programming Laboratory",
        credits: 30,
        link: "/degree-modules/programming-laboratory.pdf"
    },
    internetServices: {
        title: "Internet Services",
        credits: 15,
        link: "/degree-modules/internet-services.pdf"
    },
    mathematicalStructures: {
        title: "Mathematical Structures",
        credits: 15,
        link: "/degree-modules/mathematical-structures.pdf"
    },
    machineFundamentals: {
        title: "Machine Fundamentals",
        credits: 15,
        link: "/degree-modules/machine-fundamentals.pdf"
    },
    softwareDesign: {
        title: "Software Design",
        credits: 15,
        link: "/degree-modules/software-design.pdf"
    }
};

const SECOND_YEAR_MODULES = {
    softwareEngineering: {
        title: "Software Engineering",
        credits: 15,
        link: "/degree-modules/software-engineering.pdf"
    },
    teamProject: {
        title: "Team Project",
        credits: 15,
        link: "/degree-modules/team-project.pdf"
    },
    operatingSystems: {
        title: "Operating Systems",
        credits: 15,
        link: "/degree-modules/operating-systems.pdf"
    },
    databases: {
        title: "Databases",
        credits: 15,
        link: "/degree-modules/databases.pdf"
    },
    algorithmsAndComplexity: {
        title: "Algorithms and Complexity",
        credits: 15,
        link: "/degree-modules/algorithms-and-complexity.pdf"
    },
    multiDimensionalDataProcessing: {
        title: "Multi-dimensional Data Processing",
        credits: 15,
        link: "/degree-modules/multi-dimensional-data-processing.pdf"
    },
    artificialIntelligence: {
        title: "Artificial Intelligence",
        credits: 15,
        link: "/degree-modules/artificial-intelligence.pdf"
    },
    introductionToInformationSecurity: {
        title: "Introduction to Information Security",
        credits: 15,
        link: "/degree-modules/introduction-to-information-security.pdf"
    }
};

const THIRD_YEAR_MODULES = {
    itProjectManagement: {
        title: "IT Project Management",
        credits: 15,
        link: "/degree-modules/it-project-management.pdf"
    },
    softwareVerification: {
        title: "Software Verification",
        credits: 15,
        link: "/degree-modules/software-verification.pdf"
    },
    computationalOptimisation: {
        title: "Computational Optimisation",
        credits: 15,
        link: "/degree-modules/computational-optimisation.pdf"
    },
    functionalProgrammingAndApplications: {
        title: "Functional Programming and Applications",
        credits: 15,
        link: "/degree-modules/functional-programming-and-applications.pdf"
    },
    advancedAlgorithmsAndComplexity: {
        title: "Advanced Algorithms and Complexity",
        credits: 15,
        link: "/degree-modules/advanced-algorithms-and-complexity.pdf"
    },
    machineLearning: {
        title: "Machine Learning",
        credits: 15,
        link: "/degree-modules/machine-learning.pdf"
    },
    computationalFinance: {
        title: "Computational Finance",
        credits: 15,
        link: "/degree-modules/computational-finance.pdf"
    },
    intelligentAgentsAndMultiAgentSystems: {
        title: "Intelligent Agents and Multi-Agent Systems",
        credits: 15,
        link: "/degree-modules/intelligent-agents-and-multi-agent-systems.pdf"
    }
};

const FOURTH_YEAR_MODULES = {
    yearInIndustry: {
        title: "myairops Year in Industry",
        credits: 30,
        link: "/myairops-work"
    }
};

const FIFTH_YEAR_MODULES = {
    dataAnalysis: {
        title: "Data Analysis",
        credits: 15,
        link: "/degree-modules/data-analysis.pdf"
    },
    onlineMachineLearning: {
        title: "Online Machine Learning",
        credits: 15,
        link: "/degree-modules/online-machine-learning.pdf"
    },
    msciProject: {
        title: "Computer Science (Artificial Intelligence) MSci Project",
        credits: 60,
        link: "/degree-modules/msci-project.pdf"
    },
    advancedDistributedSystems: {
        title: "Advanced Distributed Systems and Communication Networks",
        credits: 15,
        link: "/degree-modules/advanced-distributed-systems.pdf"
    },
    introductionToReinforcementLearning: {
        title: "Introduction to Reinforcement Learning",
        credits: 15,
        link: "/degree-modules/introduction-to-reinforcement-learning.pdf"
    }
};

const ACADEMIC_YEARS = {
    "2020/21": {
        title: "First Year (2020/21)",
        modules: FIRST_YEAR_MODULES
    },
    "2021/22": {
        title: "Second Year (2021/22)", 
        modules: SECOND_YEAR_MODULES
    },
    "2022/23": {
        title: "Third Year (2022/23)",
        modules: THIRD_YEAR_MODULES
    },
    "2023/24": {
        title: "Fourth Year (2023/24) - Year in Industry",
        modules: FOURTH_YEAR_MODULES
    },
    "2024/25": {
        title: "Fifth Year (2024/25) - MSci Final Year",
        modules: FIFTH_YEAR_MODULES
    }
};

export { 
    FIRST_YEAR_MODULES,
    SECOND_YEAR_MODULES, 
    THIRD_YEAR_MODULES,
    FOURTH_YEAR_MODULES,
    FIFTH_YEAR_MODULES,
    ACADEMIC_YEARS
};