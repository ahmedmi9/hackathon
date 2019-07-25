const courses = [
  {
    id: 1,
    title: "A complete understanding of Java",
    slug: "java-basic",
    authorId: 1,
    category: "Java"
  },
  {
    id: 2,
    title: "Build a Java application with Rest and Spring",
    slug: "build-java-rest-spring",
    authorId: 1,
    category: "Java"
  },
  {
    id: 3,
    title: "Code Refactor Analysis",
    slug: "code-refactor",
    authorId: 2,
    category: "Software Practices"
  },
  {
    id: 4,
    title: "Building Javascript Development Environment",
    slug: "building-javascript-dev-environment",
    authorId: 3,
    category: "JavaSript"
  },
  {
    id: 5,
    title: "Building Application with React",
    slug: "react-redux-react",
    authorId: 3,
    category: "React"
  },
  {
    id: 6,
    title: "Understanding Design patterns",
    slug: "design-patterns",
    authorId: 2,
    category: "Software Practices"
  },
  {
    id: 7,
    title: "Building Automation framework with Java and Selenium",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Java"
  },
  {
    id: 8,
    title: "Time management for humans",
    slug: "time-management",
    authorId: 2,
    category: "Career"
  },
  {
    id: 9,
    title: "JavaScript Fundamentals",
    slug: "javascript-fundamental",
    authorId: 3,
    category: "JavaScript"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Faraz Khan" },
  { id: 2, name: "Shahir Ahmed" },
  { id: 3, name: "Sabhyasachi Raj" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

const issues = [
  {
    id: 1,
    title: "A complete understanding of Java",
    details: "java-basic",
    creatorId: 1
  },
  {
    id: 2,
    title: "A complete understanding of Java",
    details: "java-basic",
    creatorId: 1
  },
  {
    id: 3,
    title: "A complete understanding of Java",
    details: "java-basic",
    creatorId: 1
  },
  {
    id: 4,
    title: "A complete understanding of Java",
    details: "java-basic",
    creatorId: 1
  }
];

const creator = [
  { id: 1, name: "Faraz Khan" },
  { id: 2, name: "Shahir Ahmed" },
  { id: 3, name: "Sabhyasachi Raj" }
];

const newNewIssue = {
  id: null,
  title: "",
  details: null,
  creatorId: null
};

//Using CommonJs style export so we can consume via Node(without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
