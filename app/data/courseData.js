const courseData = [
  {
    name: "BSc. Computer Science & Engineering(CSE)",
    slug: "bachelor-of-science-in-computer-science-and-engineering",
    image: "/cse.webp",
    departmentSlug: "computer-science-and-engineering",
    head: {
      name: "Tanjina Akter",
      slug: "tanjina-akter",
      title: "Head of Department of CSE",
      image: "/DSC03961.png",
      message:
        "Welcome to the Department of Computer Science and Engineering at Ranada Prasad Shaha University. Our mission is to empower students with cutting-edge knowledge, innovative skills, and a passion for technology to tackle real-world challenges. We pride ourselves on fostering a vibrant academic environment that encourages creativity, research, and collaboration.Our dedicated faculty, state-of-the-art facilities, and industry-aligned curriculum ensure our graduates are well-prepared to excel in the rapidly evolving tech landscape. Join us in shaping the future of technology and making a meaningful impact on society.",
    },
    tabData: {
      "course-details": {
        School: "School of Engineering",
        Duration: "4 years",
        Department: "Department of CSE",
        Credits: "150",
        Award: "BSc.",
        Location: "RPSU Campus",
      },
      career: [
        "Software Development: Engineer, Web Dev, Mobile Dev",
        "Data Science: Analyst, Scientist",
        "AI & Machine Learning: Engineer, Analyst",
        "Cybersecurity: Analyst, Tester",
        "Cloud Computing: Architect, Admin",
        "Game Development: Designer, Programmer",
        "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
        "Research & Academia: Assistant, Lecturer",
      ],
      "year-1": {
        "1st Semester": [
          {
            number: 1,
            courseCode: "0231-ENG-1101",
            courseTitle: "Professional English I",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0541-MAT-1102",
            courseTitle: "Differential and Integral Calculus",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0533-PHY-1103",
            courseTitle: "Physics",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0533-PHY-1104",
            courseTitle: "Physics Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0533-PHY-1103",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "0611-GED-1105",
            courseTitle: "Computer Fundamentals and Computer Applications",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "0611-CSE-1106",
            courseTitle: "Structured Programming Language",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "0611-CSE-1107",
            courseTitle: "Structured Programming Language Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "-",
            coRequisite: "0611-CSE-1106",
          },
          {
            number: 8,
            courseCode: "0232-GED-1108",
            courseTitle: "Bengali Language and Literature",
            credit: 2,
            hoursPerWeek: 2,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 9,
            courseCode: "",
            courseTitle: "",
            credit: 19,
            hoursPerWeek: 21,
            preRequisite: "",
            coRequisite: "Total: ",
          },
        ],
        "2nd semester": [
          {
            number: 1,
            courseCode: "0211-ENG-1201",
            courseTitle: "Professional English II",
            preRequisite: "0231-ENG-1101",
            credit: 3,
            hoursPerWeek: 3,
          },
          {
            number: 2,
            courseCode: "0541-MAT-1202",
            courseTitle: "Coordinate Geometry & Vector Analysis",
            preRequisite: "-",
            credit: 3,
            hoursPerWeek: 3,
          },
          {
            number: 3,
            courseCode: "0531-CHM-1203",
            courseTitle: "Chemistry",
            preRequisite: "-",
            credit: 3,
            hoursPerWeek: 3,
          },
          {
            number: 4,
            courseCode: "0713-EEE-1204",
            courseTitle: "Electric Circuits",
            preRequisite: "-",
            credit: 3,
            hoursPerWeek: 3,
          },
          {
            number: 5,
            courseCode: "0713-EEE-1205",
            courseTitle: "Electric Circuits Lab",
            preRequisite: "-",
            credit: 1,
            hoursPerWeek: 2,
          },
          {
            number: 6,
            courseCode: "0222-GED-1206",
            courseTitle: "History of the Emergence of Independent Bangladesh",
            preRequisite: "-",
            credit: 2,
            hoursPerWeek: 2,
          },
          {
            number: 7,
            courseCode: "0611-CSE-1207",
            courseTitle: "Data Structure",
            preRequisite: "0611-CSE-1106",
            credit: 3,
            hoursPerWeek: 3,
          },
          {
            number: 8,
            courseCode: "0611-CSE-1208",
            courseTitle: "Data Structure Lab",
            preRequisite: "0611-CSE-1207",
            credit: 1,
            hoursPerWeek: 2,
          },
          {
            number: 9,
            courseCode: "0613-CSE-1209",
            courseTitle: "Object Oriented Programming I",
            preRequisite: "0611-CSE-1106",
            credit: 3,
            hoursPerWeek: 3,
          },
          {
            number: 10,
            courseCode: "0613-CSE-1210",
            courseTitle: "Object Oriented Programming I Lab",
            preRequisite: "0613-CSE-1209",
            credit: 1,
            hoursPerWeek: 2,
          },
          {
            number: 11,
            courseCode: "",
            courseTitle: "",
            credit: 23,
            hoursPerWeek: 26,
            preRequisite: "",
            coRequisite: "Total: ",
          },
        ],
      },
      "year-2": {
        "3rd Semester": [
          {
            number: 1,
            courseCode: "0222-GED-2101",
            courseTitle: "Bangladesh Studies",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0541-MAT-2102",
            courseTitle: "Linear Algebra and Complex Variables",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0714-EEE-2103",
            courseTitle: "Electronic Devices and Circuits",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "0713-EEE-1204",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0714-EEE-2104",
            courseTitle: "Electronic Devices and Circuits Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0714-EEE-2103",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "0613-CSE-2105",
            courseTitle: "Object Oriented Programming II",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "0611-CSE-1106",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "0613-CSE-2106",
            courseTitle: "Object Oriented Programming II Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0613-CSE-2105",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "0714-CSE-2107",
            courseTitle: "Digital Logic Design",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 8,
            courseCode: "0714-CSE-2108",
            courseTitle: "Digital Logic Design Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0714-CSE-2107",
            coRequisite: "-",
          },
          {
            number: 9,
            courseCode: "0541-CSE-2109",
            courseTitle: "Discrete Mathematics",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 10,
            courseCode: "0612-CSE-2110",
            courseTitle: "Communication Engineering",
            credit: 2,
            hoursPerWeek: 2,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 11,
            courseCode: "",
            courseTitle: "",
            credit: 23,
            hoursPerWeek: 26,
            preRequisite: "",
            coRequisite: "Total: ",
          },
        ],
        "4th Semester": [
          {
            number: 1,
            courseCode: "0311-GED-2201",
            courseTitle: "Economics and Sociology",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0541-MAT-2202",
            courseTitle: "Differential Equations and Fourier Transformation",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0613-CSE-2203",
            courseTitle: "Algorithms",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "0611-CSE-1207",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0613-CSE-2204",
            courseTitle: "Algorithms Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0613-CSE-2203",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "0612-CSE-2205",
            courseTitle: "Database Management Systems",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "0612-CSE-2206",
            courseTitle: "Database Management Systems Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0612-CSE-2205",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "0612-CSE-2207",
            courseTitle: "Computer Architecture",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 8,
            courseCode: "0613-CSE-2208",
            courseTitle: "Theory of Computation",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 9,
            courseCode: "0613-CSE-2209",
            courseTitle: "Operating System",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 10,
            courseCode: "0613-CSE-2210",
            courseTitle: "Operating System Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0613-CSE-2209",
            coRequisite: "-",
          },
          {
            number: 11,
            courseCode: "",
            courseTitle: "",
            credit: 24,
            hoursPerWeek: 27,
            preRequisite: "",
            coRequisite: "Total: ",
          },
        ],
      },
      "year-3": {
        "5th Semester": [
          {
            number: 1,
            courseCode: "0412-GED-3101",
            courseTitle: "Financial and Managerial Accounting",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0542-MAT-3102",
            courseTitle: "Basic Statistics and Data Analysis",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0613-CSE-3103",
            courseTitle: "Microprocessor and Assembly Language Programming",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0613-CSE-3104",
            courseTitle: "Microprocessor and Assembly Language Programming Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0613-CSE-3103",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "0613-CSE-3105",
            courseTitle: "E-Commerce and Web Design Lab",
            credit: 2,
            hoursPerWeek: 3,
            preRequisite: "0612-CSE-2205",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "0613-CSE-3106",
            courseTitle: "Compiler Design",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "0613-CSE-2208",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "0613-CSE-3107",
            courseTitle: "Compiler Design Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0613-CSE-3106",
            coRequisite: "-",
          },
          {
            number: 8,
            courseCode: "0613-CSE-3108",
            courseTitle: "Peripherals and Interfacing",
            credit: 2,
            hoursPerWeek: 2,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 9,
            courseCode: "0613-CSE-3109",
            courseTitle: "Peripherals and Interfacing Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0613-CSE-3108",
            coRequisite: "-",
          },
          {
            number: 10,
            courseCode: "Optional Course I",
            courseTitle: "-",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 11,
            courseCode: "",
            courseTitle: "",
            credit: 22,
            hoursPerWeek: 26,
            preRequisite: "",
            coRequisite: "Total: ",
          },
        ],
        "6th Semester": [
          {
            number: 1,
            courseCode: "0314-GED-3201",
            courseTitle: "Organizational Behaviour and Engineering Ethics",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0541-CSE-3202",
            courseTitle: "Numerical Methods",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0612-CSE-3203",
            courseTitle: "Computer Network",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "0612-CSE-2110",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0612-CSE-3204",
            courseTitle: "Computer Network Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0612-CSE-3203",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "0613-CSE-3205",
            courseTitle: "Software Engineering and Information System Design",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "0613-CSE-3206",
            courseTitle:
              "Software Engineering and Information System Design Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0613-CSE-3205",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "0613-CSE-3207",
            courseTitle: "Artificial Intelligence",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 8,
            courseCode: "0613-CSE-3208",
            courseTitle: "Artificial Intelligence Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0613-CSE-3207",
            coRequisite: "-",
          },
          {
            number: 9,
            courseCode: "Special Elective Course I",
            courseTitle: "-",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 10,
            courseCode: "Special Elective Course Lab I",
            courseTitle: "-",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 11,
            courseCode: "",
            courseTitle: "",
            credit: 22,
            hoursPerWeek: 26,
            preRequisite: "",
            coRequisite: "Total: ",
          },
        ],
      },

      "year-4": {
        "7th Semester": [
          {
            number: 1,
            courseCode: "0613-CSE-4101",
            courseTitle: "Data Mining and Data Warehousing",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0612-CSE-4102",
            courseTitle: "Network Security",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "0612-CSE-3203",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0613-CSE-4103",
            courseTitle: "Computer Graphics",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0613-CSE-4104",
            courseTitle: "Computer Graphics Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "0613-CSE-4103",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "0612-CSE-4105",
            courseTitle: "Technical Writing Lab",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "0413-CSE-4106",
            courseTitle: "IT Organization and Management",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "Optional Course II",
            courseTitle: "-",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 8,
            courseCode: "Special Elective Course II",
            courseTitle: "-",
            credit: 3,
            hoursPerWeek: 3,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 9,
            courseCode: "Special Elective Course Lab II",
            courseTitle: "-",
            credit: 1,
            hoursPerWeek: 2,
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 10,
            courseCode: "",
            courseTitle: "",
            credit: 21,
            hoursPerWeek: 24,
            preRequisite: "",
            coRequisite: "Total: ",
          },
        ],
        "8th Semester": [
          {
            number: 1,
            courseCode: "0612-CSE-4201",
            courseTitle: "Internship with Seminar",
            credit: 6,
            hoursPerWeek: "-",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0613-CSE-4202",
            courseTitle: "Project with Seminar",
            credit: 6,
            hoursPerWeek: "-",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0613-CSE-4203",
            courseTitle: "Thesis with Seminar",
            credit: 6,
            hoursPerWeek: "-",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "",
            courseTitle: "",
            credit: 6,
            hoursPerWeek: "-",
            preRequisite: "",
            coRequisite: "Total: ",
          },
        ],
      },
    },
  },
  {
    name: "BSc. Electrical & Electronic Engineering(EEE)",
    slug: "bachelor-of-science-in-electrical-and-electronic-engineering",
    image: "/eee.webp",
    departmentSlug: "electrical-and-electronic-engineering",
    head: {
      name: null,
      slug: "engr-md-lutfur-rahman",
      title: "Message from the Department",
      image: null,
      message:
        "Welcome to the Department of Electrical and Electronic Engineering at Ranada Prasad Shaha University. Our mission is to inspire and prepare students with advanced knowledge, practical skills, and a drive for innovation to address the challenges of the modern world. We are committed to cultivating an academic environment that nurtures creativity, critical thinking, and research. With our dedicated faculty, cutting-edge laboratories, and an industry-oriented curriculum, we ensure our graduates are equipped to lead in the ever-evolving field of electrical and electronic engineering. Join us to explore the exciting possibilities of technology, contribute to groundbreaking innovations, and make a positive impact on society.",
    },
    tabData: {
      "course-details": {
        School: "School of Engineering",
        Duration: "4 years",
        Department: "Department of EEE",
        Credits: "147",
        Award: "BSc.",
        Location: "RPSU Campus",
      },
      career: [
        "Software Development: Engineer, Web Dev, Mobile Dev",
        "Data Science: Analyst, Scientist",
        "AI & Machine Learning: Engineer, Analyst",
        "Cybersecurity: Analyst, Tester",
        "Cloud Computing: Architect, Admin",
        "Game Development: Designer, Programmer",
        "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
        "Research & Academia: Assistant, Lecturer",
      ],
      "year-1": {
        "1st Semester": [
          {
            number: 1,
            courseCode: "MAT-112",
            courseTitle: "Differential and Integral Calculus",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "PHY-113",
            courseTitle: "Physics I",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "PHY-114",
            courseTitle: "Physics I Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "PHY-113",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "GED-115",
            courseTitle: "Computer Fundamentals",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "GED-116",
            courseTitle: "Computer Application Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "GED-115",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "GED-118",
            courseTitle: "History of the Emergence of Independent Bangladesh",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "EEE-123",
            courseTitle: "Electrical Circuits I",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "PHY-113",
            coRequisite: "-",
          },
          {
            number: 8,
            courseCode: "EEE-124",
            courseTitle: "Electrical Circuits I Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "PHY-114",
            coRequisite: "-",
          },
          {
            number: 9,
            courseCode: "EEE-132",
            courseTitle: "Electronic Circuits I",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "PHY-113",
            coRequisite: "-",
          },
          {
            number: 10,
            courseCode: "EEE-133",
            courseTitle: "Electronic Circuits I Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "PHY-114",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 20,
            hoursPerWeek: "20",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "2nd Semester": [
          {
            number: 1,
            courseCode: "ENG-121",
            courseTitle: "English Language Skills Development",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "CHM-125",
            courseTitle: "Chemistry",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "MAT-122",
            courseTitle: "Coordinate Geometry & Vector Analysis",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "MAT-112",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "EEE-134",
            courseTitle: "Electrical Circuits II",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "EEE-123",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "EEE-135",
            courseTitle: "Electrical Circuits II Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "EEE-124",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "EEE-213",
            courseTitle: "Electronic Circuits II",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "EEE-132",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "EEE-214",
            courseTitle: "Electronic Circuits II Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "EEE-133",
            coRequisite: "-",
          },
          {
            number: 8,
            courseCode: "GED-127",
            courseTitle: "Professional Ethics and Environmental Protection",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 20,
            hoursPerWeek: "20",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
      },
      "year-2": {
        "3rd Semester": [
          {
            number: 1,
            courseCode: "MAT-131",
            courseTitle: "Linear Algebra and Complex Variables",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "MAT-122",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "EEE-215",
            courseTitle: "Electrical Machines – I",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "EEE-123",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "EEE-215",
            courseTitle: "Electrical Machines – I Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "EEE-123",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "MAT-221",
            courseTitle: "Basic Statistics and Probability",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "MAT-112",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "EEE-225",
            courseTitle: "Introductions to Computer Programming",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "GED-116",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "EEE-226",
            courseTitle: "Introduction to Computer Programming Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "GED-116",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "ME-231",
            courseTitle: "Mechanical Engineering",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 8,
            courseCode: "ME-232",
            courseTitle: "Mechanical Engineering Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 20,
            hoursPerWeek: "20",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "4th Semester": [
          {
            number: 1,
            courseCode: "GED-128",
            courseTitle: "Bangla Language",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "EEE-223",
            courseTitle: "Electrical Machines – II",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "EEE-215",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "EEE-224",
            courseTitle: "Electrical Machines – II Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "EEE-216",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "MAT-211",
            courseTitle: "Differential Equations and Special Functions",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "MAT-131",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "MAT-355",
            courseTitle: "Numerical Methods and Computer Programming",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "EEE-234",
            courseTitle: "Digital Electronics",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "EEE-132 & EEE-134",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "EEE-235",
            courseTitle: "Digital Electronics Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "EEE-133 & EEE-135",
            coRequisite: "-",
          },
          {
            number: 8,
            courseCode: "EEE-311",
            courseTitle: "Communication Engineering",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 9,
            courseCode: "EEE-311",
            courseTitle: "Communication Engineering Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 21,
            hoursPerWeek: "21",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
      },
      "year-3": {
        "5th Semester": [
          {
            number: 1,
            courseCode: "GED-353",
            courseTitle: "Bangladesh Studies",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "EEE-312",
            courseTitle: "Signals & Systems",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "GED-222",
            courseTitle: "Financial & Managerial Accounting",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "EEE-450",
            courseTitle: "Instrumentation & Measurement",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "EEE-215, EEE-223",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "EEE-451",
            courseTitle: "Instrumentation & Measurement Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "EEE-215, EEE-223",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "EEE-322",
            courseTitle: "Solid State Device",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "EEE-132, EEE-134",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "GED-333",
            courseTitle: "Engineering Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 8,
            courseCode: "EEE-324",
            courseTitle: "Electrical & Electronic Design Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "EEE-215, EEE-223",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 20,
            hoursPerWeek: "20",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "6th Semester": [
          {
            number: 1,
            courseCode: "EEE-333",
            courseTitle: "Electrical Properties of Materials",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "EEE-331",
            courseTitle: "Control Systems",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "MAT-131",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "EEE-332",
            courseTitle: "Control Systems Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "MAT-131",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "GED-321",
            courseTitle: "Engineering Economics",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "EEE-439",
            courseTitle: "Microprocessors & Computer Interfacing",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "EEE-234",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "EEE-440",
            courseTitle: "Microprocessors & Computer Interfacing Lab",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "EEE-234",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "EEE-413",
            courseTitle: "Power System-I",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "EEE-215, EEE-223",
            coRequisite: "-",
          },
          {
            number: 8,
            courseCode: "Elective Course - 1",
            courseTitle: "Elective Course - 1",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 9,
            courseCode: "Elective Course Lab - 2",
            courseTitle: "Elective Course Lab - 2",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 21,
            hoursPerWeek: "21",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
      },
      "year-4": {
        "7th Semester": [
          {
            number: 1,
            courseCode: "EEE-313",
            courseTitle: "Fields & Waves",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "PHY-113",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "Elective Course - 3",
            courseTitle: "Elective Course - 3",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "Elective Course Lab - 4",
            courseTitle: "Elective Course Lab - 4",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "Elective Course - 5",
            courseTitle: "Elective Course - 5",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "Elective Course Lab- 6",
            courseTitle: "Elective Course Lab- 6",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "Elective Course - 7",
            courseTitle: "Elective Course - 7",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "Elective Course Lab - 8",
            courseTitle: "Elective Course Lab - 8",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 8,
            courseCode: "Elective Course - 9",
            courseTitle: "Elective Course - 9",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 9,
            courseCode: "Elective Course - 10",
            courseTitle: "Elective Course - 10",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 21,
            hoursPerWeek: "21",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "8th Semester": [
          {
            number: 1,
            courseCode: "Elective Course - 11",
            courseTitle: "Elective Course - 11",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "Elective Course Lab - 12",
            courseTitle: "Elective Course Lab - 12",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "Elective Course - 13",
            courseTitle: "Elective Course - 13",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "Elective Course Lab- 14",
            courseTitle: "Elective Course Lab- 14",
            credit: 1,
            hoursPerWeek: "0+1",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "Elective Course - 15",
            courseTitle: "Elective Course - 15",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "EEE-444",
            courseTitle: "Project/Thesis",
            credit: 6,
            hoursPerWeek: "6+0",
            preRequisite: "-",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 17,
            hoursPerWeek: "17",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
      },
    },
  },
  {
    name: "Bachelor of Business Administration(BBA)",
    slug: "bachelor-of-business-administration-bba",
    image: "/bba.webp",
    departmentSlug: "business-administration",
    head: {
      name: "Dr. Sheikh Abdur Rahim",
      slug: "dr-sheikh-abdur-rahim",
      title: "Head of the Department",
      image: "/dr-sheikh-abdur-rahim.jpg",
      message:
        "Welcome to the Department of Business Administration at Ranada Prasad Shaha University. Our mission is to shape future business leaders with the knowledge, skills, and mindset to thrive in a dynamic global economy. We emphasize academic excellence, practical learning, and innovation to develop professionals who can drive growth and create meaningful change. Our experienced faculty, modern facilities, and industry-relevant curriculum ensure students are prepared to excel in diverse fields such as management, marketing, finance, and entrepreneurship. Join us to build a strong foundation for your career, unlock your potential, and become a leader in the business world.",
    },
    tabData: {
      "course-details": {
        School: "School of Business",
        Duration: "4 years",
        Department: "Department of Business Administration",
        Credits: "127",
        Award: "BBA.",
        Location: "RPSU Campus",
      },
      career: [
        "Software Development: Engineer, Web Dev, Mobile Dev",
        "Data Science: Analyst, Scientist",
        "AI & Machine Learning: Engineer, Analyst",
        "Cybersecurity: Analyst, Tester",
        "Cloud Computing: Architect, Admin",
        "Game Development: Designer, Programmer",
        "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
        "Research & Academia: Assistant, Lecturer",
      ],
      "year-1": {
        "1st Semester": [
          {
            number: 1,
            courseCode: "0231-111",
            courseTitle: "Functional English",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0232-112",
            courseTitle: "Bengali Literature",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0611-113",
            courseTitle: "Computer Applications in Business",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0541-114",
            courseTitle: "Mathematics for Business",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "0222-115",
            courseTitle: "Bangladesh Studies",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "0413-111",
            courseTitle: "Introduction to Business",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 18,
            hoursPerWeek: "18",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "2nd Semester": [
          {
            number: 1,
            courseCode: "0031-121",
            courseTitle: "Presentation Skill Development",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0542-122",
            courseTitle: "Introduction to Statistics",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0411-121",
            courseTitle: "Principles of Accounting",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-111",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0413-121",
            courseTitle: "Principles of Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-111",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "0412-121",
            courseTitle: "Principles of Finance",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-111",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "0414-121",
            courseTitle: "Principles of Marketing",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-111",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 18,
            hoursPerWeek: "18",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
      },
      "year-2": {
        "3rd Semester": [
          {
            number: 1,
            courseCode: "0222-211",
            courseTitle: "Emergence of History of Bangladesh",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0031-212",
            courseTitle: "Business Communication",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0411-211",
            courseTitle: "Financial Accounting",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0411-121",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0413-211",
            courseTitle: "Human Resource Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-121",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "0412-211",
            courseTitle: "Financial Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0412-121",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "0414-211",
            courseTitle: "Marketing Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0414-121",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "0612-211",
            courseTitle: "Management Information Systems",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0611-113",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 21,
            hoursPerWeek: "21",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "4th Semester": [
          {
            number: 1,
            courseCode: "0223-221",
            courseTitle: "Professional Ethics",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0313-222",
            courseTitle: "Industrial Psychology",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0311-221",
            courseTitle: "Micro Economics",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-111",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0413-221",
            courseTitle: "Organizational Behavior",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-121",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "0542-221",
            courseTitle: "Business Statistics",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0542-122",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "0414-221",
            courseTitle: "Supply Chain Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0414-211",
            coRequisite: "-",
          },
          {
            number: 7,
            courseCode: "0413-222",
            courseTitle: "Operations Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-121",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 21,
            hoursPerWeek: "21",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
      },
      "year-3": {
        "5th Semester": [
          {
            number: 1,
            courseCode: "0421-311",
            courseTitle: "Legal Issues in Business",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0311-311",
            courseTitle: "Macro Economics",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0311-221",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0411-311",
            courseTitle: "Managerial Accounting",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0411-211",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0413-311",
            courseTitle:
              "Entrepreneurship Development and New Business Creation",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-121",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "Major Courses (2)",
            courseTitle: "Two Courses from Chosen Major",
            credit: 6,
            hoursPerWeek: "6+0",
            preRequisite: "Refer to Major Table",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 18,
            hoursPerWeek: "18",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "5th Semester Majors in Marketing": [
          {
            courseCode: "0414-1-311",
            courseTitle: "Consumer Behavior",
            credit: 3,
            preRequisite: "0414-121",
          },
          {
            courseCode: "0414-1-312",
            courseTitle: "International Marketing",
            credit: 3,
            preRequisite: "0414-121",
          },
        ],
        "5th Semester Majors in Management": [
          {
            courseCode: "0413-2-312",
            courseTitle: "Organizational Development and Change",
            credit: 3,
            preRequisite: "0413-121",
          },
          {
            courseCode: "0413-2-313",
            courseTitle: "Global Business Strategy",
            credit: 3,
            preRequisite: "0413-121",
          },
        ],
        "5th Semester Majors in Accounting": [
          {
            courseCode: "0411-3-312",
            courseTitle: "Intermediate Accounting",
            credit: 3,
            preRequisite: "0411-121",
          },
          {
            courseCode: "0411-3-313",
            courseTitle: "Audit and Assurance",
            credit: 3,
            preRequisite: "0411-121",
          },
        ],
        "5th Semester Majors in Finance": [
          {
            courseCode: "0412-4-311",
            courseTitle: "Financial Markets and Institutions",
            credit: 3,
            preRequisite: "0412-211",
          },
          {
            courseCode: "0412-4-312",
            courseTitle: "Insurance and Risk Management",
            credit: 3,
            preRequisite: "0412-211",
          },
        ],
        "5th Semester Majors in Human Resource Management": [
          {
            courseCode: "0413-5-311",
            courseTitle: "Human Resource Planning and Forecasting",
            credit: 3,
            preRequisite: "0413-211",
          },
          {
            courseCode: "0413-5-312",
            courseTitle: "Industrial Relations and Labor Law",
            credit: 3,
            preRequisite: "0413-211",
          },
        ],
        "5th Semester Majors in Management Information Systems": [
          {
            courseCode: "0413-6-311",
            courseTitle: "Programming for Information Systems",
            credit: 3,
            preRequisite: "0612-211",
          },
          {
            courseCode: "0413-6-312",
            courseTitle: "Strategic Management and Information Systems",
            credit: 3,
            preRequisite: "0612-211",
          },
        ],

        "6th Semester": [
          {
            number: 1,
            courseCode: "0411-321",
            courseTitle: "Taxation",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0411-211",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0499-321",
            courseTitle: "Business Research Methods - I",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0542-221",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0413-322",
            courseTitle: "International Business",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-111",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0413-321",
            courseTitle: "Total Quality Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-121",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "Major Courses (2)",
            courseTitle: "Two Courses from Chosen Major",
            credit: 6,
            hoursPerWeek: "6+0",
            preRequisite: "Refer to Major Table",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 18,
            hoursPerWeek: "18",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "6th Semester Majors in Marketing": [
          {
            courseCode: "0414-1-321",
            courseTitle: "Service Marketing",
            credit: 3,
            preRequisite: "0414-121",
          },
          {
            courseCode: "0414-1-322",
            courseTitle: "Integrated Marketing Communication",
            credit: 3,
            preRequisite: "0414-121",
          },
        ],
        "6th Semester Majors in Management": [
          {
            courseCode: "0413-2-322",
            courseTitle: "Management Science",
            credit: 3,
            preRequisite: "0413-121",
          },
          {
            courseCode: "0413-2-323",
            courseTitle: "Management of Change and Technology",
            credit: 3,
            preRequisite: "0413-121",
          },
        ],
        "6th Semester Majors in Accounting": [
          {
            courseCode: "0411-3-322",
            courseTitle: "Cost Accounting",
            credit: 3,
            preRequisite: "0411-121",
          },
          {
            courseCode: "0411-3-323",
            courseTitle: "Advanced Financial Accounting",
            credit: 3,
            preRequisite: "0411-121",
          },
        ],
        "6th Semester Majors in Finance": [
          {
            courseCode: "0412-4-321",
            courseTitle: "Fundamental of Corporate Finance",
            credit: 3,
            preRequisite: "0412-211",
          },
          {
            courseCode: "0412-4-322",
            courseTitle: "Working Capital Management",
            credit: 3,
            preRequisite: "0412-211",
          },
        ],
        "6th Semester Majors in Human Resource Management": [
          {
            courseCode: "0413-5-321",
            courseTitle: "Performance Appraisal and Management",
            credit: 3,
            preRequisite: "0413-211",
          },
          {
            courseCode: "0413-5-322",
            courseTitle: "Compensation and Benefit Management",
            credit: 3,
            preRequisite: "0413-211",
          },
        ],
        "6th Semester Majors in Management Information Systems": [
          {
            courseCode: "0413-6-321",
            courseTitle: "Data Communication and Networking",
            credit: 3,
            preRequisite: "0612-211",
          },
          {
            courseCode: "0413-5-322",
            courseTitle: "Database Management",
            credit: 3,
            preRequisite: "0612-211",
          },
        ],
      },
      "year-4": {
        "7th Semester": [
          {
            number: 1,
            courseCode: "0413-411",
            courseTitle: "Project Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-121",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0612-411",
            courseTitle: "Digital Business and E-Commerce Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0612-211",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "0499-411",
            courseTitle: "Business Research Methods - II",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0499-321",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "0413-412",
            courseTitle: "Strategic Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "0413-121",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "Major Courses (2)",
            courseTitle: "Two Courses from Chosen Major",
            credit: 6,
            hoursPerWeek: "6+0",
            preRequisite: "Refer to Major Table",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 18,
            hoursPerWeek: "18",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "7th Semester Majors in Marketing": [
          {
            courseCode: "0414-1-411",
            courseTitle: "Selling and Sales Management",
            credit: 3,
            preRequisite: "0414-121",
          },
          {
            courseCode: "0414-1-412",
            courseTitle: "Marketing Research",
            credit: 3,
            preRequisite: "0414-121",
          },
        ],
        "7th Semester Majors in Management": [
          {
            courseCode: "0413-2-413",
            courseTitle: "Leadership, Power and Influence",
            credit: 3,
            preRequisite: "0413-121",
          },
          {
            courseCode: "0413-2-414",
            courseTitle: "Corporate Social Responsibilities",
            credit: 3,
            preRequisite: "0413-121",
          },
        ],
        "7th Semester Majors in Accounting": [
          {
            courseCode: "0411-3-411",
            courseTitle: "Accounting Information Systems",
            credit: 3,
            preRequisite: "0411-121",
          },
          {
            courseCode: "0411-3-412",
            courseTitle: "Financial Statement Analysis",
            credit: 3,
            preRequisite: "0411-121",
          },
        ],
        "7th Semester Majors in Finance": [
          {
            courseCode: "0412-4-411",
            courseTitle: "Financial Analysis and Control",
            credit: 3,
            preRequisite: "0412-211",
          },
          {
            courseCode: "0412-4-412",
            courseTitle: "Introduction to Financial Derivatives",
            credit: 3,
            preRequisite: "0412-211",
          },
        ],
        "7th Semester Majors in Human Resource Management": [
          {
            courseCode: "0413-5-411",
            courseTitle: "Leadership, Power and Influence",
            credit: 3,
            preRequisite: "0413-211",
          },
          {
            courseCode: "0413-5-412",
            courseTitle: "Human Resource in Global Business Environment",
            credit: 3,
            preRequisite: "0413-211",
          },
        ],
        "7th Semester Majors in Management Information Systems": [
          {
            courseCode: "0413-6-412",
            courseTitle: "Decision Support Systems",
            credit: 3,
            preRequisite: "0612-221",
          },
          {
            courseCode: "0413-6-413",
            courseTitle: "Enterprise Resource Planning",
            credit: 3,
            preRequisite: "0612-221",
          },
        ],

        "8th Semester": [
          {
            number: 1,
            courseCode: "0499-421",
            courseTitle: "Viva Voce",
            credit: 4,
            hoursPerWeek: "4+0",
            preRequisite: "After completion of all courses",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "0499-422",
            courseTitle: "Internship/ Project Report",
            credit: 4,
            hoursPerWeek: "4+0",
            preRequisite: "After completion of all courses",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 8,
            hoursPerWeek: "8",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
      },
    },
  },
  {
    name: "Bachelor of Business Administration (BBA) in Finance",
    slug: "bachelor-of-business-administration-finance",
    image: "/bbaf.webp",
    departmentSlug: "business-administration",
    head: {
      name: "Dr. Sheikh Abdur Rahim",
      slug: "dr-sheikh-abdur-rahim",
      title: "Head of the Department",
      image: "/dr-sheikh-abdur-rahim.jpg",
      message:
        "Welcome to the Department of Business Administration at Ranada Prasad Shaha University. Our mission is to shape future business leaders with the knowledge, skills, and mindset to thrive in a dynamic global economy. We emphasize academic excellence, practical learning, and innovation to develop professionals who can drive growth and create meaningful change. Our experienced faculty, modern facilities, and industry-relevant curriculum ensure students are prepared to excel in diverse fields such as management, marketing, finance, and entrepreneurship. Join us to build a strong foundation for your career, unlock your potential, and become a leader in the business world.",
    },
    tabData: {
      "course-details": {
        School: "School of Business",
        Duration: "4 years",
        Department: "Department of Business Administration",
        Credits: "127",
        Award: "BBA.",
        Location: "RPSU Campus",
      },
      career: [
        "Software Development: Engineer, Web Dev, Mobile Dev",
        "Data Science: Analyst, Scientist",
        "AI & Machine Learning: Engineer, Analyst",
        "Cybersecurity: Analyst, Tester",
        "Cloud Computing: Architect, Admin",
        "Game Development: Designer, Programmer",
        "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
        "Research & Academia: Assistant, Lecturer",
      ],
      "year-1": {
        "1st Semester": [
          {
            number: 1,
            courseCode: "GED 110",
            courseTitle: "English Reading & Composition I",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 2,
            courseCode: "GED 111",
            courseTitle: "Bangladesh Studies: Culture, Heritage & Economy",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 3,
            courseCode: "BMT 113",
            courseTitle: "Business Mathematics I",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 4,
            courseCode: "BUS 121",
            courseTitle: "Introduction to Business",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 5,
            courseCode: "GED 112",
            courseTitle: "Introduction to Sociology",
            credit: 3,
            preRequisite: "None",
          },
        ],
        "2nd Semester": [
          {
            number: 1,
            courseCode: "GED 115",
            courseTitle: "English Reading & Composition II",
            credit: 3,
            preRequisite: "GED 110",
          },
          {
            number: 2,
            courseCode: "MGT 122",
            courseTitle: "Principles of Management",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 3,
            courseCode: "ACN 123",
            courseTitle: "Principles of Accounting",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 4,
            courseCode: "BST 114",
            courseTitle: "Business Statistics I",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 5,
            courseCode: "MIS 116",
            courseTitle: "Basic Computer Concepts",
            credit: 3,
            preRequisite: "None",
          },
        ],
      },
      "year-2": {
        "3rd Semester": [
          {
            number: 1,
            courseCode: "ECO 126",
            courseTitle: "Micro Economics",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 2,
            courseCode: "FIN 125",
            courseTitle: "Principles of Finance",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 3,
            courseCode: "BUS 131",
            courseTitle: "Business Communication",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 4,
            courseCode: "LAW 132",
            courseTitle: "Business Law",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 5,
            courseCode: "MKT 124",
            courseTitle: "Principles of Marketing",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 6,
            courseCode: "BMT 232",
            courseTitle: "Business Mathematics II",
            credit: 3,
            preRequisite: "None",
          },
        ],
        "4th Semester": [
          {
            number: 1,
            courseCode: "GED 120",
            courseTitle: "Public Speaking",
            credit: 3,
            preRequisite: "GED 110, GED 115",
          },
          {
            number: 2,
            courseCode: "MGT 221",
            courseTitle: "Organizational Behavior",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 3,
            courseCode: "ECO 243",
            courseTitle: "Macro Economics",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 4,
            courseCode: "ACN 225",
            courseTitle: "Financial Accounting",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 5,
            courseCode: "ACN 244",
            courseTitle: "Taxation",
            credit: 3,
            preRequisite: "None",
          },
        ],
      },
      "year-3": {
        "5th Semester": [
          {
            number: 1,
            courseCode: "ACN 254",
            courseTitle: "Management Accounting",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 2,
            courseCode: "BUS 323",
            courseTitle: "Business Ethics",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 3,
            courseCode: "MIS 333",
            courseTitle: "Management Information Systems (MIS)",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 4,
            courseCode: "FIN 322",
            courseTitle: "Financial Management",
            credit: 3,
            preRequisite: "FIN 125",
          },
          {
            number: 5,
            courseCode: "MGT 323",
            courseTitle: "Human Resource Management",
            credit: 3,
            preRequisite: "MGT 122, MGT 221",
          },
        ],
        "6th Semester": [
          {
            number: 1,
            courseCode: "MKT 324",
            courseTitle: "Marketing Management",
            credit: 3,
            preRequisite: "MKT 124",
          },
          {
            number: 2,
            courseCode: "MGT 329",
            courseTitle: "Production and Operations Management",
            credit: 3,
            preRequisite: "BUS 121, BMT 113, BMT 232",
          },
          {
            number: 3,
            courseCode: "BUS 321",
            courseTitle: "Entrepreneurship Development",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 4,
            courseCode: "BST 242",
            courseTitle: "Business Statistics II",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 5,
            courseCode: "BUS 322",
            courseTitle: "International Business",
            credit: 3,
            preRequisite: "None",
          },
        ],
      },
      "year-4": {
        "7th Semester": [
          {
            number: 1,
            courseCode: "FIN 334",
            courseTitle: "Banking and Insurance",
            credit: 3,
            preRequisite: "None",
          },
          {
            number: 2,
            courseCode: "BUS 353",
            courseTitle: "Research Methodology",
            credit: 3,
            preRequisite: "BST 114, BST 242",
          },
          {
            number: 3,
            courseCode: "Major-1",
            courseTitle: "Major Course 1",
            credit: 3,
            preRequisite: "All GED & Core Courses",
          },
          {
            number: 4,
            courseCode: "Major-2",
            courseTitle: "Major Course 2",
            credit: 3,
            preRequisite: "All GED & Core Courses",
          },
          {
            number: 5,
            courseCode: "Major-3",
            courseTitle: "Major Course 3",
            credit: 3,
            preRequisite: "All GED & Core Courses",
          },
        ],
        "8th Semester": [
          {
            number: 1,
            courseCode: "FIN 411",
            courseTitle: "Project Management",
            credit: 3,
            preRequisite: "BUS 124",
          },
          {
            number: 2,
            courseCode: "MGT 493",
            courseTitle: "Strategic Management",
            credit: 3,
            preRequisite: "All GED & Core Courses",
          },
          {
            number: 3,
            courseCode: "Major-4",
            courseTitle: "Major Course 4",
            credit: 3,
            preRequisite: "All GED & Core Courses",
          },
          {
            number: 4,
            courseCode: "Major-5",
            courseTitle: "Major Course 5",
            credit: 3,
            preRequisite: "All GED & Core Courses",
          },
          {
            number: 5,
            courseCode: "Major-6",
            courseTitle: "Major Course 6",
            credit: 3,
            preRequisite: "All GED & Core Courses",
          },
          {
            number: 6,
            courseCode: "INT 494 /INT 495",
            courseTitle: "Internship/ Project Report",
            credit: 3,
            preRequisite: "Complete all Courses",
          },
        ],
      },
    },
  },
  {
    name: "Master of Business Administration (MBA)",
    slug: "master-of-business-administration-mba",
    image: "/mba.webp",
    departmentSlug: "business-administration",
    head: {
      name: "Dr. Sheikh Abdur Rahim",
      slug: "dr-sheikh-abdur-rahim",
      title: "Head of the Department",
      image: "/dr-sheikh-abdur-rahim.jpg",
      message:
        "Welcome to the Department of Business Administration at Ranada Prasad Shaha University. Our mission is to shape future business leaders with the knowledge, skills, and mindset to thrive in a dynamic global economy. We emphasize academic excellence, practical learning, and innovation to develop professionals who can drive growth and create meaningful change. Our experienced faculty, modern facilities, and industry-relevant curriculum ensure students are prepared to excel in diverse fields such as management, marketing, finance, and entrepreneurship. Join us to build a strong foundation for your career, unlock your potential, and become a leader in the business world.",
    },
    tabData: {
      "course-details": {
        School: "School of Business",
        Duration: "18 months, 12 months",
        Department: "Department of Business Administration",
        Credits: "64, 52, 40",
        Award: "MBA.",
        Location: "RPSU Campus",
      },
      career: [
        "Software Development: Engineer, Web Dev, Mobile Dev",
        "Data Science: Analyst, Scientist",
        "AI & Machine Learning: Engineer, Analyst",
        "Cybersecurity: Analyst, Tester",
        "Cloud Computing: Architect, Admin",
        "Game Development: Designer, Programmer",
        "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
        "Research & Academia: Assistant, Lecturer",
      ],
      "18 Months (64 Credits)": {
        "First Year First Semester": [
          {
            number: 1,
            courseCode: "GED 511",
            courseTitle: "Communication Skills for Managers",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "GED 512",
            courseTitle: "Computer Applications",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "CC 511",
            courseTitle: "Management and Organizational Behavior",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "CC 512",
            courseTitle: "Fundamentals of Marketing",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "CC 513",
            courseTitle: "Accounting for Managers",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 18,
            hoursPerWeek: "18",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "First Year Second Semester": [
          {
            number: 1,
            courseCode: "CC 514",
            courseTitle: "Business Statistics",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "CC 515",
            courseTitle: "Fundamentals of Financial Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "CC 516",
            courseTitle: "Human Resource Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "CC 517",
            courseTitle: "Managerial Economics",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "CC 518",
            courseTitle: "Managerial Accounting",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "CC 519",
            courseTitle: "Marketing Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 18,
            hoursPerWeek: "18",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],

        "Second Year First Semester": [
          {
            number: 1,
            courseCode: "CC 621",
            courseTitle: "Business Research Methods",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "CC 622",
            courseTitle: "Entrepreneurship and Small Business Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle:
              "Major Four courses (12 credits) from the following table",
            credit: 12,
            hoursPerWeek: "12",
            preRequisite: "",
            coRequisite: "Select any four courses from the following",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 18,
            hoursPerWeek: "18",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "Major in Marketing": [
          {
            number: 1,
            courseCode: "MKT 601",
            courseTitle: "Brand Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "MKT 602",
            courseTitle: "Advanced Marketing Research",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "MKT 603",
            courseTitle: "Strategic Marketing",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "MKT 604",
            courseTitle: "Global Marketing",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "MKT 605",
            courseTitle: "Product Planning and Development",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "MKT 606",
            courseTitle: "Supply Chain Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
        ],
        "Major in Finance": [
          {
            number: 1,
            courseCode: "FIN 601",
            courseTitle: "Corporate Finance",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "FIN 602",
            courseTitle: "Financial statement Analysis and Valuation",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "FIN 603",
            courseTitle: "International Financial Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "FIN 604",
            courseTitle: "Investment and Portfolio Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "FIN 605",
            courseTitle: "Lease Financing and Investment Banking",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "FIN 606",
            courseTitle: "Financial Derivatives and Risk Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
        ],
        "Major in Human Resource Management": [
          {
            number: 1,
            courseCode: "HRM 601",
            courseTitle: "Manpower Planning and Personnel Policy",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "HRM 602",
            courseTitle: "Compensative Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "HRM 603",
            courseTitle: "Industrial Relations",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "HRM 604",
            courseTitle: "Strategic Human Resource Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "HRM 605",
            courseTitle: "Personnel Training and Development",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "HRM 606",
            courseTitle: "Human Resource Information Systems",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
        ],
        "Major in Accounting": [
          {
            number: 1,
            courseCode: "ACT 601",
            courseTitle: "Advanced Financial Accounting",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "ACT 602",
            courseTitle: "Cost Accounting",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "ACT 603",
            courseTitle: "Intermediate Accounting",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "ACT 604",
            courseTitle:
              "Corporate Financial Reporting and Financial Statement Analysis",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "ACT 605",
            courseTitle: "Contemporary Auditing",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "ACT 606",
            courseTitle: "Corporate Tax Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
        ],
        "Major in Banking": [
          {
            number: 1,
            courseCode: "BNK 601",
            courseTitle: "Banking Law and Practice",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "BNK 602",
            courseTitle: "Management of Financial Institutions",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "BNK 603",
            courseTitle: "Bank Fund Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "BNK 604",
            courseTitle: "Central Banking: Regulations and Supervision",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "BNK 605",
            courseTitle: "International Financial Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "BNK 606",
            courseTitle: "Financial Markets and Institutions",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
        ],
        "Second Year Second Semester": [
          {
            number: 1,
            courseCode: "CC 623",
            courseTitle: "Managerial Finance",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "CC 624",
            courseTitle: "Strategic Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "VIV 700",
            courseTitle: "Viva Voce",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "INT/RPT 700",
            courseTitle: "Internship/Research Project",
            credit: 4,
            hoursPerWeek: "4",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 13,
            hoursPerWeek: "13",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
      },
      "18 Months (52 Credits)": {
        "First Year First Semester": [
          {
            number: 1,
            courseCode: "GED 511",
            courseTitle: "Communication Skills for Managers",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "GED 512",
            courseTitle: "Computer Applications",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "CC 511",
            courseTitle: "Management and Organizational Behavior",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "CC 515",
            courseTitle: "Fundamentals of Financial Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "CC 517",
            courseTitle: "Managerial Economics",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 15,
            hoursPerWeek: "15",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "First Year Second Semester": [
          {
            number: 1,
            courseCode: "CC 516",
            courseTitle: "Human Resource Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "CC 518",
            courseTitle: "Managerial Accounting",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "CC 519",
            courseTitle: "Marketing Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "CC 621",
            courseTitle: "Business Research Methods",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "CC 623",
            courseTitle: "Managerial Finance",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "CC 624",
            courseTitle: "Strategic Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 18,
            hoursPerWeek: "18",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "Second Year First Semester": [
          {
            number: 1,
            courseCode: "VIV 700",
            courseTitle: "Viva Voce",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "INT/RPT 700",
            courseTitle: "Internship/Research Project",
            credit: 4,
            hoursPerWeek: "4",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: null,
            courseCode: "",
            courseTitle:
              "Major four courses (12 credits) from the following table",
            credit: 12,
            hoursPerWeek: "12",
            preRequisite: "",
            coRequisite: "Select any four courses from the following",
          },
          {
            number: null,
            courseCode: "",
            courseTitle: "",
            credit: 19,
            hoursPerWeek: "19",
            preRequisite: "",
            coRequisite: "Total Credits",
          },
        ],
        "Major in Marketing": [
          {
            number: 1,
            courseCode: "MKT 601",
            courseTitle: "Brand Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "MKT 602",
            courseTitle: "Advanced Marketing Research",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "MKT 603",
            courseTitle: "Strategic Marketing",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "MKT 604",
            courseTitle: "Global Marketing",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "MKT 605",
            courseTitle: "Product Planning and Development",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "MKT 606",
            courseTitle: "Supply Chain Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
        ],
        "Major in Finance": [
          {
            number: 1,
            courseCode: "FIN 601",
            courseTitle: "Corporate Finance",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "FIN 602",
            courseTitle: "Financial statement Analysis and Valuation",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "FIN 603",
            courseTitle: "International Financial Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "FIN 604",
            courseTitle: "Investment and Portfolio Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "FIN 605",
            courseTitle: "Lease Financing and Investment Banking",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "FIN 606",
            courseTitle: "Financial Derivatives and Risk Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
        ],
        "Major in Human Resource Management": [
          {
            number: 1,
            courseCode: "HRM 601",
            courseTitle: "Manpower Planning and Personnel Policy",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 2,
            courseCode: "HRM 602",
            courseTitle: "Compensative Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 3,
            courseCode: "HRM 603",
            courseTitle: "Industrial Relations",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 4,
            courseCode: "HRM 604",
            courseTitle: "Strategic Human Resource Management",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 5,
            courseCode: "HRM 605",
            courseTitle: "Personnel Training and Development",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
          {
            number: 6,
            courseCode: "HRM 606",
            courseTitle: "Human Resource Information Systems",
            credit: 3,
            hoursPerWeek: "3+0",
            preRequisite: "None",
            coRequisite: "-",
          },
        ],
      },
      "12 Months": {
        "First Year First Semester": [
          {
            "number": 1,
            "courseCode": "GED 511",
            "courseTitle": "Communication Skills for Managers",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "GED 512",
            "courseTitle": "Computer Applications",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "CC 511",
            "courseTitle": "Management and Organizational Behavior",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "CC 518",
            "courseTitle": "Managerial Accounting",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "CC 621",
            "courseTitle": "Business Research Methods",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "CC 623",
            "courseTitle": "Managerial Finance",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 18,
            "hoursPerWeek": "18",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ],
        "First Year Second Semester": [
          {
            "number": 1,
            "courseCode": "CC 624",
            "courseTitle": "Strategic Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "VIV 700",
            "courseTitle": "Viva Voce",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "INT/RPT 700",
            "courseTitle": "Internship/Research Project",
            "credit": 4,
            "hoursPerWeek": "4",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "Major Four Courses (12 Credits)",
            "credit": 12,
            "hoursPerWeek": "12",
            "preRequisite": "",
            "coRequisite": "Select any four courses from the following"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 22,
            "hoursPerWeek": "22",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ],
        "Major in Marketing": [
          {
            "number": 1,
            "courseCode": "MKT 601",
            "courseTitle": "Brand Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "MKT 602",
            "courseTitle": "Advanced Marketing Research",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "MKT 603",
            "courseTitle": "Strategic Marketing",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "MKT 604",
            "courseTitle": "Global Marketing",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "MKT 605",
            "courseTitle": "Product Planning and Development",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "MKT 606",
            "courseTitle": "Supply Chain Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ],
        "Major in Finance": [
          {
            "number": 1,
            "courseCode": "FIN 601",
            "courseTitle": "Corporate Finance",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "FIN 602",
            "courseTitle": "Financial statement Analysis and Valuation",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "FIN 603",
            "courseTitle": "International Financial Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "FIN 604",
            "courseTitle": "Investment and Portfolio Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "FIN 605",
            "courseTitle": "Lease Financing and Investment Banking",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "FIN 606",
            "courseTitle": "Financial Derivatives and Risk Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ],
        "Major in Human Resource Management": [
          {
            "number": 1,
            "courseCode": "HRM 601",
            "courseTitle": "Manpower Planning and Personnel Policy",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "HRM 602",
            "courseTitle": "Compensative Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "HRM 603",
            "courseTitle": "Industrial Relations",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "HRM 604",
            "courseTitle": "Strategic Human Resource Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "HRM 605",
            "courseTitle": "Personnel Training and Development",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "HRM 606",
            "courseTitle": "Human Resource Information Systems",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ],
        "Major in Accounting": [
          {
            "number": 1,
            "courseCode": "ACT 601",
            "courseTitle": "Advanced Financial Accounting",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "ACT 602",
            "courseTitle": "Cost Accounting",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "ACT 603",
            "courseTitle": "Intermediate Accounting",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "ACT 604",
            "courseTitle": "Corporate Financial Reporting and Financial Statement Analysis",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "ACT 605",
            "courseTitle": "Contemporary Auditing",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "ACT 606",
            "courseTitle": "Corporate Tax Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ],
        "Major in Banking": [
          {
            "number": 1,
            "courseCode": "BNK 601",
            "courseTitle": "Banking Law and Practice",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "BNK 602",
            "courseTitle": "Management of Financial Institutions",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "BNK 603",
            "courseTitle": "Bank Fund Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "BNK 604",
            "courseTitle": "Central Banking: Regulations and Supervision",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "BNK 605",
            "courseTitle": "International Financial Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "BNK 606",
            "courseTitle": "Financial Markets and Institutions",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ]
      }
      ,
    },
  },
  {
    name: "Executive Master of Business Administration (EMBA)",
    slug: "executive-master-of-business-administration-emba",
    image: "/emba.webp",
    departmentSlug: "business-administration",
    head: {
      name: "Dr. Sheikh Abdur Rahim",
      slug: "dr-sheikh-abdur-rahim",
      title: "Head of the Department",
      image: "/dr-sheikh-abdur-rahim.jpg",
      message:
        "Welcome to the Department of Business Administration at Ranada Prasad Shaha University. Our mission is to shape future business leaders with the knowledge, skills, and mindset to thrive in a dynamic global economy. We emphasize academic excellence, practical learning, and innovation to develop professionals who can drive growth and create meaningful change. Our experienced faculty, modern facilities, and industry-relevant curriculum ensure students are prepared to excel in diverse fields such as management, marketing, finance, and entrepreneurship. Join us to build a strong foundation for your career, unlock your potential, and become a leader in the business world.",
    },
    tabData: {
      "course-details": {
        School: "School of Business",
        Duration: "18 months",
        Department: "Department of Business Administration",
        Credits: "52",
        Award: "MBA.",
        Location: "RPSU Campus",
      },
      career: [
        "Software Development: Engineer, Web Dev, Mobile Dev",
        "Data Science: Analyst, Scientist",
        "AI & Machine Learning: Engineer, Analyst",
        "Cybersecurity: Analyst, Tester",
        "Cloud Computing: Architect, Admin",
        "Game Development: Designer, Programmer",
        "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
        "Research & Academia: Assistant, Lecturer",
      ],
    "year-1":{
      "1st Semester": [
        {
          "number": 1,
          "courseCode": "0031-511",
          "courseTitle": "Communication Skills for Managers",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0611-512",
          "courseTitle": "Computer Applications",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0413-511",
          "courseTitle": "Principles of Management",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0413-512",
          "courseTitle": "Principles of Marketing",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 5,
          "courseCode": "0411-513",
          "courseTitle": "Principles of Accounting",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 6,
          "courseCode": "0412-514",
          "courseTitle": "Principles of Finance",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": null,
          "courseCode": "",
          "courseTitle": "",
          "credit": 18,
          "hoursPerWeek": "18",
          "preRequisite": "",
          "coRequisite": "Total Credits"
        }
      ],
      "2nd Semester": [
        {
          "number": 1,
          "courseCode": "0411-521",
          "courseTitle": "Managerial Accounting",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0414-522",
          "courseTitle": "Marketing Management",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0311-523",
          "courseTitle": "Managerial Economics",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0409-524",
          "courseTitle": "Business Research Methods",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 5,
          "courseCode": "Major 1",
          "courseTitle": "Choose from your selected major",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 6,
          "courseCode": "Major 2",
          "courseTitle": "Choose from your selected major",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": null,
          "courseCode": "",
          "courseTitle": "",
          "credit": 18,
          "hoursPerWeek": "18",
          "preRequisite": "",
          "coRequisite": "Total Credits"
        }
      ]
    },
    "year-2":{
      "3rd Semester": [
        {
          "number": 1,
          "courseCode": "0413-525",
          "courseTitle": "Strategic Management",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "Major 3",
          "courseTitle": "Choose from your selected major",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "Major 4",
          "courseTitle": "Choose from your selected major",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0409-700",
          "courseTitle": "Viva Voce",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 5,
          "courseCode": "0409-701",
          "courseTitle": "Research Project",
          "credit": 4,
          "hoursPerWeek": "4+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": null,
          "courseCode": "",
          "courseTitle": "",
          "credit": 16,
          "hoursPerWeek": "16",
          "preRequisite": "",
          "coRequisite": "Total Credits"
        }
      ]
    },
    "Majors":{
      "Major in Accounting": [
        {
          "number": 1,
          "courseCode": "0411-1-601",
          "courseTitle": "Advanced Financial Accounting",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0411-1-602",
          "courseTitle": "Cost Accounting",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0411-1-603",
          "courseTitle": "Intermediate Accounting",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0411-1-604",
          "courseTitle": "Corporate Financial Reporting and Financial Statement Analysis",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        }
      ],
      "Major in Banking": [
        {
          "number": 1,
          "courseCode": "0412-2-601",
          "courseTitle": "Banking Law and Practice",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0412-2-602",
          "courseTitle": "Management of Financial Institutions",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0412-2-603",
          "courseTitle": "Bank Fund Management",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0412-2-604",
          "courseTitle": "Central Banking: Regulations and Supervision",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        }
      ],
      "Major in Finance": [
        {
          "number": 1,
          "courseCode": "0412-3-601",
          "courseTitle": "Corporate Finance",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0412-3-602",
          "courseTitle": "Financial Statement Analysis and Valuation",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0412-3-603",
          "courseTitle": "International Financial Management",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0412-3-604",
          "courseTitle": "Investment and Portfolio Management",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        }
      ],
      "Major in Human Resource Management": [
        {
          "number": 1,
          "courseCode": "0413-4-601",
          "courseTitle": "Manpower Planning and Personnel Policy",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0413-4-602",
          "courseTitle": "Compensative Management",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0413-4-603",
          "courseTitle": "Industrial Relations",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0413-4-604",
          "courseTitle": "Strategic Human Resource Management",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        }
      ],
      "Major in Marketing": [
        {
          "number": 1,
          "courseCode": "0414-5-601",
          "courseTitle": "Brand Management",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0414-5-602",
          "courseTitle": "Advanced Marketing Research",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0414-5-603",
          "courseTitle": "Strategic Marketing",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0414-5-604",
          "courseTitle": "Global Marketing",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        }
      ],
      "Major in Healthcare Management and Leadership": [
        {
          "number": 1,
          "courseCode": "0413-6-601",
          "courseTitle": "The Healthcare Organization",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0413-6-602",
          "courseTitle": "Managing the Healthcare Organization- The Financial Perspective",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0413-6-603",
          "courseTitle": "Patient Safety, Quality Management and Quality Improvement",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0413-6-604",
          "courseTitle": "Management and Leadership Development in Healthcare",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        }
      ],
      "Major in Corporate Strategy": [
        {
          "number": 1,
          "courseCode": "0413-7-601",
          "courseTitle": "Corporate Strategy",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0413-7-602",
          "courseTitle": "Power and Politics in Organizations",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0413-7-603",
          "courseTitle": "Competitive Analysis",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0413-7-604",
          "courseTitle": "Transformational Leadership",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        }
      ],
      "Major in Management Consultancy": [
        {
          "number": 1,
          "courseCode": "0413-8-601",
          "courseTitle": "Leadership and Managing Change",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0413-8-602",
          "courseTitle": "Managing People and Organization",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0413-8-603",
          "courseTitle": "Business Process Analysis",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0413-8-604",
          "courseTitle": "Strategic Change Management",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        }
      ],
      "Major in Digital Business": [
        {
          "number": 1,
          "courseCode": "0413-9-601",
          "courseTitle": "Introduction to Informatics and Computing",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0413-9-602",
          "courseTitle": "Digital Business Strategies",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0413-9-603",
          "courseTitle": "Digital Marketing",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0413-9-604",
          "courseTitle": "Digital Banking and Fintech",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        }
      ],
      "Major in Entrepreneurship and Innovation": [
        {
          "number": 1,
          "courseCode": "0413-10-601",
          "courseTitle": "Innovation and Entrepreneurship",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0413-10-602",
          "courseTitle": "Business Model Innovation",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0413-10-603",
          "courseTitle": "Market Entry Strategies",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0413-10-604",
          "courseTitle": "Entrepreneurial Behavior",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        }
      ],
      "Major in Apparel Merchandising": [
        {
          "number": 1,
          "courseCode": "0212-601",
          "courseTitle": "Textile Science: Fiber to Fabric Manufacturing",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "0212-602",
          "courseTitle": "Chemical Processing, Dyeing and Washing",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "0212-603",
          "courseTitle": "Clothing Materials and Cutting Technology",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "0212-604",
          "courseTitle": "Introduction to Pattern and CAD",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        }
      ]
    },
    
    
    
    },
  },
  {
    name: "MBA in Apparel Merchandising",
    slug: "mba-in-apparel-merchandising",
    image: "/mbaam.webp",
    departmentSlug: "business-administration",
    head: {
      name: "Dr. Sheikh Abdur Rahim",
      slug: "dr-sheikh-abdur-rahim",
      title: "Head of the Department",
      image: "/dr-sheikh-abdur-rahim.jpg",
      message:
        "Welcome to the Department of Business Administration at Ranada Prasad Shaha University. Our mission is to shape future business leaders with the knowledge, skills, and mindset to thrive in a dynamic global economy. We emphasize academic excellence, practical learning, and innovation to develop professionals who can drive growth and create meaningful change. Our experienced faculty, modern facilities, and industry-relevant curriculum ensure students are prepared to excel in diverse fields such as management, marketing, finance, and entrepreneurship. Join us to build a strong foundation for your career, unlock your potential, and become a leader in the business world.",
    },
    tabData: {
      "course-details": {
        School: "School of Business",
        Duration: "18 months",
        Department: "Department of Business Administration",
        Credits: "57",
        Award: "MBA",
        Location: "RPSU Campus",
      },
      career: [
        "Software Development: Engineer, Web Dev, Mobile Dev",
        "Data Science: Analyst, Scientist",
        "AI & Machine Learning: Engineer, Analyst",
        "Cybersecurity: Analyst, Tester",
        "Cloud Computing: Architect, Admin",
        "Game Development: Designer, Programmer",
        "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
        "Research & Academia: Assistant, Lecturer",
      ],
    "Foundation Courses":{
      "Foundation courses ": [
        {
          "number": 1,
          "courseCode": "FC-501",
          "courseTitle": "Introduction to RMG Business",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "FC-502",
          "courseTitle": "Economic Issue of Textile and Apparel Business",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "FC-503",
          "courseTitle": "Management Accounting",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "FC-504",
          "courseTitle": "Marketing Management",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 5,
          "courseCode": "FC-505",
          "courseTitle": "Statistics for Apparel Professionals",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 6,
          "courseCode": "FC-506",
          "courseTitle": "Human Resource Management",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 7,
          "courseCode": "FC-507",
          "courseTitle": "Managerial Finance",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        }
      ]
    },
    "Core Courses":{
      "Core courses": [
    {
      "number": 1,
      "courseCode": "CC-601",
      "courseTitle": "Textile Science: Fiber to Fabric Manufacturing",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 2,
      "courseCode": "CC-602",
      "courseTitle": "Chemical Processing, Dyeing and Washing",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 3,
      "courseCode": "CC-603",
      "courseTitle": "Clothing Materials and Cutting Technology",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 4,
      "courseCode": "CC-604",
      "courseTitle": "Entrepreneurship Development in Merchandising",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 5,
      "courseCode": "CC-605",
      "courseTitle": "Sourcing and Negotiation Techniques in Apparel Industry",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 6,
      "courseCode": "CC-606",
      "courseTitle": "Tools and Techniques of Merchandising",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    }
  ]},
  "Major Courses":{
    "Major courses": [
    {
      "number": 1,
      "courseCode": "APM-601",
      "courseTitle": "Introduction to Pattern and CAD",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 2,
      "courseCode": "APM-602",
      "courseTitle": "Production and Operations Management in Apparel Industry",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 3,
      "courseCode": "APM-603",
      "courseTitle": "Quality Control and Compliance in Apparel Industry",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 4,
      "courseCode": "APM-604",
      "courseTitle": "Textile Testing and Fabric Analysis",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 5,
      "courseCode": "APM-605",
      "courseTitle": "Supply Chain and Logistics Management",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 6,
      "courseCode": "APM-606",
      "courseTitle": "Knitwear Technology",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 7,
      "courseCode": "APM-607",
      "courseTitle": "International Trade and Export Import Management in RMG",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 8,
      "courseCode": "APM-608",
      "courseTitle": "Garments Construction and Apparel Engineering",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    }
  ]},
    }
  },
  {
    name: "Bachelor of Pharmacy",
    slug: "bachelor-of-pharmacy",
    image: "/bp.webp",
    departmentSlug: "pharmacy",
    head: {
      name: "Maimuna Hasan",
      slug: "maimuna-hasan",
      title: "Head of the Department",
      image: "/maimuna-hasan.jpg",
      message:
        "Welcome to the Department of Pharmacy at Ranada Prasad Shaha University. Our mission is to nurture the next generation of pharmacists who are equipped with the knowledge, clinical skills, and ethical mindset to improve healthcare outcomes. We strive to create an environment that fosters scientific inquiry, compassionate care, and innovation. With a dedicated faculty, state-of-the-art facilities, and a comprehensive curriculum aligned with industry standards, our program prepares students to excel in various areas of pharmacy practice, research, and pharmaceutical sciences. Join us to play a vital role in advancing healthcare and making a positive impact on the well-being of communities."},
    tabData: {
      "course-details": {
        School: "School of Life Science & Health",
        Duration: "4 Years",
        Department: "Department of Pharmacy",
        Credits: "165",
        Award: "Bachelor's Degree",
        Location: "RPSU Campus",
      },
      career: [
        "Software Development: Engineer, Web Dev, Mobile Dev",
        "Data Science: Analyst, Scientist",
        "AI & Machine Learning: Engineer, Analyst",
        "Cybersecurity: Analyst, Tester",
        "Cloud Computing: Architect, Admin",
        "Game Development: Designer, Programmer",
        "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
        "Research & Academia: Assistant, Lecturer",
      ],
      "year-1": {
        "1st Semester": [
          {
            "number": 1,
            "courseCode": "0916BLL101",
            "courseTitle": "Bengali Language and Literature",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "0916ELC102",
            "courseTitle": "English Language and Communication",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "0916PHR111",
            "courseTitle": "Inorganic Pharmacy-I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "0916PHR112",
            "courseTitle": "Organic Pharmacy",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "0916PHR113",
            "courseTitle": "Physical Pharmacy-I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "0916PHR114",
            "courseTitle": "Pharmacognosy-I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "0916PHR115",
            "courseTitle": "Inorganic Pharmacy-I Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 8,
            "courseCode": "0916PHR116",
            "courseTitle": "Organic Pharmacy Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 9,
            "courseCode": "0916PHR117",
            "courseTitle": "Physical Pharmacy-I Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 10,
            "courseCode": "0916PHR118",
            "courseTitle": "Pharmacognosy-I Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 22,
            "hoursPerWeek": "22",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ],
        "2nd Semester": [
    {
      "number": 1,
      "courseCode": "0916HIB103",
      "courseTitle": "History of the Emergence of Independent Bangladesh",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 2,
      "courseCode": "0916BAS104",
      "courseTitle": "Bangladesh Studies",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 3,
      "courseCode": "0916PHR121",
      "courseTitle": "Inorganic Pharmacy-II",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 4,
      "courseCode": "0916PHR122",
      "courseTitle": "Physical Pharmacy-II",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 5,
      "courseCode": "0916PHR123",
      "courseTitle": "Biochemistry and Cellular Biology",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 6,
      "courseCode": "0916PHR124",
      "courseTitle": "Human Physiology and Anatomy-I",
      "credit": 3,
      "hoursPerWeek": "3+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 7,
      "courseCode": "0916PHR125",
      "courseTitle": "Physical Pharmacy-II Lab",
      "credit": 1,
      "hoursPerWeek": "1+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 8,
      "courseCode": "0916PHR126",
      "courseTitle": "Human Physiology and Anatomy-I Lab",
      "credit": 1,
      "hoursPerWeek": "1+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": 9,
      "courseCode": "0916PHR127",
      "courseTitle": "Viva-voce",
      "credit": 1,
      "hoursPerWeek": "1+0",
      "preRequisite": "None",
      "coRequisite": "-"
    },
    {
      "number": null,
      "courseCode": "",
      "courseTitle": "",
      "credit": 21,
      "hoursPerWeek": "21",
      "preRequisite": "",
      "coRequisite": "Total Credits"
    }
  ]
      },
      "year-2": {
        "3rd Semester": [
          {
            "number": 1,
            "courseCode": "0916ORB201",
            "courseTitle": "Organizational Behaviour",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "0916HEE202",
            "courseTitle": "Health Economics",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "0916PHR211",
            "courseTitle": "Pharmaceutical Analysis-I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "0916PHR212",
            "courseTitle": "Pharmacognosy-II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "0916PHR213",
            "courseTitle": "Human Physiology and Anatomy-II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "0916PHR214",
            "courseTitle": "Pharmaceutical Microbiology and Immunology-I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "0916PHR215",
            "courseTitle": "Pharmaceutical Analysis-I Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 8,
            "courseCode": "0916PHR216",
            "courseTitle": "Pharmacognosy-II Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 9,
            "courseCode": "0916PHR217",
            "courseTitle": "Human Physiology and Anatomy-II Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 10,
            "courseCode": "0916PHR218",
            "courseTitle": "Pharmaceutical Microbiology and Immunology-I Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 22,
            "hoursPerWeek": "22",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ],
        "4th Semester": [
          {
            "number": 1,
            "courseCode": "0916BST203",
            "courseTitle": "Bio-statistics",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "0916CPS204",
            "courseTitle": "Computer Science",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "0916PHR221",
            "courseTitle": "Pharmaceutical Analysis-II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "0916PHR222",
            "courseTitle": "Pharmaceutical Microbiology and Immunology-II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "0916PHR223",
            "courseTitle": "Pharmacology-I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "0916PHR224",
            "courseTitle": "Disease Pathology",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "0916PHR225",
            "courseTitle": "Pharmaceutical Analysis-II Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 8,
            "courseCode": "0916PHR226",
            "courseTitle": "Pharmacology-I Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 9,
            "courseCode": "0916PHR227",
            "courseTitle": "Viva-voce",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 21,
            "hoursPerWeek": "21",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ]
      },
      "year-3": {
        "5th Semester": [
          {
            "number": 1,
            "courseCode": "0916PMK301",
            "courseTitle": "Pharmaceutical Marketing",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "0916PPM302",
            "courseTitle": "Pharmaceutical Product Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "0916PHR311",
            "courseTitle": "Medicinal Chemistry-I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "0916PHR312",
            "courseTitle": "Pharmacology-II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "0916PHR313",
            "courseTitle": "Pharmaceutical Technology-I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "0916PHR314",
            "courseTitle": "Pharmaceutical Engineering-I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "0916PHR315",
            "courseTitle": "Medicinal Chemistry-I Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 8,
            "courseCode": "0916PHR316",
            "courseTitle": "Pharmacology-II Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 9,
            "courseCode": "0916PHR317",
            "courseTitle": "Pharmaceutical Technology-I Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 21,
            "hoursPerWeek": "21",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ],
        "6th Semester": [
          {
            "number": 1,
            "courseCode": "0916RMD303",
            "courseTitle": "Research Methodology",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "0916PHR321",
            "courseTitle": "Pharmaceutical Engineering-II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "0916PHR322",
            "courseTitle": "Pharmacology-III",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "0916PHR323",
            "courseTitle": "Pharmaceutical Technology-II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "0916PHR324",
            "courseTitle": "Bio-pharmaceutics-I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "0916PHR325",
            "courseTitle": "Quality Control, Quality Assurance and Validation",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "0916PHR326",
            "courseTitle": "Pharmacology-III Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 8,
            "courseCode": "0916PHR327",
            "courseTitle": "Pharmaceutical Technology-II Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 9,
            "courseCode": "0916PHR328",
            "courseTitle": "Bio-pharmaceutics-I Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 10,
            "courseCode": "0916PHR329",
            "courseTitle": "Viva-voce",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 22,
            "hoursPerWeek": "22",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ]
      },
      "year-4": {
        "7th Semester": [
          {
            "number": 1,
            "courseCode": "0916PHR411",
            "courseTitle": "Medicinal Chemistry-II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "0916PHR412",
            "courseTitle": "Bio-pharmaceutics-II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "0916PHR413",
            "courseTitle": "Organic Spectroscopy",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "0916PHR414",
            "courseTitle": "Pharmaceutical Technology-III",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "0916PHR415",
            "courseTitle": "Hospital, Clinical and Community Pharmacy",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "0916PHR416",
            "courseTitle": "Bio-pharmaceutics-II Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "0916PHR417",
            "courseTitle": "Project Work",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 19,
            "hoursPerWeek": "19",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ],
        "8th Semester": [
          {
            "number": 1,
            "courseCode": "0916EDP401",
            "courseTitle": "Entrepreneurship Development in Pharmaceutical Industry",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "0916PHR421",
            "courseTitle": "Cosmetology",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "0916PHR422",
            "courseTitle": "Molecular Biology and Biotechnology",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "0916PHR423",
            "courseTitle": "Pharmaceutical Regulatory Affairs",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "0916PHR424",
            "courseTitle": "Cosmetology Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "0916PHR425",
            "courseTitle": "Molecular Biology and Biotechnology Lab",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "0916PHR426",
            "courseTitle": "In-plant Training",
            "credit": 2,
            "hoursPerWeek": "2+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 8,
            "courseCode": "0916PHR427",
            "courseTitle": "Viva-voce",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 17,
            "hoursPerWeek": "17",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ]
      },
      
    },
  },
  {
    name: "B.A (Hons.) in English",
    slug: "ba-hons-in-english",
    image: "/bae.webp",
    departmentSlug: "english",
    head: {
      name: "A. K. Zunayet Ahammed",
      slug: "a-k-zunayet-ahammed",
      title: "Head of the Department",
      image: "/a-k-zunayet-ahammed.jpg",
      message:
        "Welcome to the Department of English at Ranada Prasad Shaha University. Our mission is to provide students with a comprehensive understanding of the English language, literature, and culture. We aim to foster critical thinking, creativity, and effective communication skills that are essential for personal growth and professional success. Our dedicated faculty members are committed to creating a supportive learning environment that encourages intellectual curiosity, cultural diversity, and academic excellence. Join us to explore the rich world of English language and literature and embark on a journey of self-discovery and lifelong learning."},
    tabData: {
      "course-details": {
        School: "School of Arts & Social Sciences",
        Duration: "4 Years",
        Department: "Department of English",
        Credits: "141",
        Award: "BA Hons. Degree",
        Location: "RPSU Campus",
      },
      career: [
        "Software Development: Engineer, Web Dev, Mobile Dev",
        "Data Science: Analyst, Scientist",
        "AI & Machine Learning: Engineer, Analyst",
        "Cybersecurity: Analyst, Tester",
        "Cloud Computing: Architect, Admin",
        "Game Development: Designer, Programmer",
        "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
        "Research & Academia: Assistant, Lecturer",
      ],
      "year-1": {
        "1st Semester": [
          {
            "number": 1,
            "courseCode": "GED 111",
            "courseTitle": "Computer Fundamentals",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "GED 112",
            "courseTitle": "History of Western Thought",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "GED 113",
            "courseTitle": "Origin of Bengali Culture and History",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "ENG 114",
            "courseTitle": "Critical Reading and Academic Writing",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "ENG 115",
            "courseTitle": "Composition",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "GED 116",
            "courseTitle": "Introduction to Bengali Literature",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 18,
            "hoursPerWeek": "18",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ],
        "2nd Semester": [
          {
            "number": 1,
            "courseCode": "ENG 121",
            "courseTitle": "Structure of English",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "ENG 122",
            "courseTitle": "English for Professional Purposes",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "ENG 123",
            "courseTitle": "Literary Theory",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "ENG 124",
            "courseTitle": "Introduction to Prose",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "ENG 125",
            "courseTitle": "Introduction to Literary Genres and Terms",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "ENG 126",
            "courseTitle": "History of English Literature",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 18,
            "hoursPerWeek": "18",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ]
      },
      "year-2": {
        "3rd Semester": [
          {
            "number": 1,
            "courseCode": "ENG 211",
            "courseTitle": "Listening and Speaking Skills",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "ENG 212",
            "courseTitle": "Elizabethan Drama",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "ENG 213",
            "courseTitle": "Introduction to Linguistics",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "ENG 214",
            "courseTitle": "Old and Middle English Literature",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "GED 215",
            "courseTitle": "Public Speaking",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "GED 216",
            "courseTitle": "Socio-political History of Europe",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 18,
            "hoursPerWeek": "18",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ],
        "4th Semester": [
          {
            "number": 1,
            "courseCode": "ENG 221",
            "courseTitle": "Elizabethan and Seventeenth Century Poetry",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "ENG 222",
            "courseTitle": "Seventeenth Century Prose and Drama",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "ENG 223",
            "courseTitle": "18th Century English Literature",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "ENG 224",
            "courseTitle": "Romantic Literature",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "ENG 225",
            "courseTitle": "American Literature",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "GED 226",
            "courseTitle": "English Language Proficiency",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 18,
            "hoursPerWeek": "18",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ],
      },
       
      "year-3": { 
        "5th Semester": [
        {
          "number": 1,
          "courseCode": "ENG 311",
          "courseTitle": "19th Century Literature-1",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "ENG 312",
          "courseTitle": "20th Century English Literature",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "ENG 313",
          "courseTitle": "19th Century Literature-2",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "ENG 314",
          "courseTitle": "Newspaper Editing",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 5,
          "courseCode": "ENG 315",
          "courseTitle": "Introduction to Phonetics and Phonology",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 6,
          "courseCode": "GED 316",
          "courseTitle": "Career Planning and Development",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": null,
          "courseCode": "",
          "courseTitle": "",
          "credit": 18,
          "hoursPerWeek": "18",
          "preRequisite": "",
          "coRequisite": "Total Credits"
        }
      ],
      "6th Semester": [
        {
          "number": 1,
          "courseCode": "ENG 321",
          "courseTitle": "Classical Literature in English Translation",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 2,
          "courseCode": "ENG 322",
          "courseTitle": "Creative Writing",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 3,
          "courseCode": "ENG 323",
          "courseTitle": "History of English Language Teaching",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 4,
          "courseCode": "ENG 324",
          "courseTitle": "Teaching Comprehension and Reading",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 5,
          "courseCode": "ENG 325",
          "courseTitle": "Elizabethan and Restoration Drama",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": 6,
          "courseCode": "GED 326",
          "courseTitle": "General Psychology",
          "credit": 3,
          "hoursPerWeek": "3+0",
          "preRequisite": "None",
          "coRequisite": "-"
        },
        {
          "number": null,
          "courseCode": "",
          "courseTitle": "",
          "credit": 18,
          "hoursPerWeek": "18",
          "preRequisite": "",
          "coRequisite": "Total Credits"
        }
      ]
    },
      "year-4": {
        "7th Semester": [
          {
            "number": 1,
            "courseCode": "ENG 411",
            "courseTitle": "Teaching English as a Second Language",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "ENG 412",
            "courseTitle": "Psycholinguistics and Sociolinguistics",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "ENG 413",
            "courseTitle": "19th Century Literature-3",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "ENG 414",
            "courseTitle": "20th Century Poetry",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "ENG 415",
            "courseTitle": "Teaching Grammar and Composition",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "GED 416",
            "courseTitle": "Translation Studies",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 18,
            "hoursPerWeek": "18",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ],
        "8th Semester": [
          {
            "number": 1,
            "courseCode": "GED 421",
            "courseTitle": "International Relations",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "ENG 422",
            "courseTitle": "Second Language Acquisition",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "GED 423",
            "courseTitle": "Research Methodology",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "ENG 424",
            "courseTitle": "Thesis",
            "credit": 6,
            "hoursPerWeek": "6+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": null,
            "courseCode": "",
            "courseTitle": "",
            "credit": 15,
            "hoursPerWeek": "15",
            "preRequisite": "",
            "coRequisite": "Total Credits"
          }
        ]
      },
      
    },
  },
  {
    name: "M.A in English",
    slug: "ma-hons-in-english",
    image: "/mae.webp",
    departmentSlug: "english",
    head: {
      name: "A. K. Zunayet Ahammed",
      slug: "a-k-zunayet-ahammed",
      title: "Head of the Department",
      image: "/a-k-zunayet-ahammed.jpg",
      message:
        "Welcome to the Department of English at Ranada Prasad Shaha University. Our mission is to provide students with a comprehensive understanding of the English language, literature, and culture. We aim to foster critical thinking, creativity, and effective communication skills that are essential for personal growth and professional success. Our dedicated faculty members are committed to creating a supportive learning environment that encourages intellectual curiosity, cultural diversity, and academic excellence. Join us to explore the rich world of English language and literature and embark on a journey of self-discovery and lifelong learning."},
    tabData: {
      "course-details": {
        School: "School of Arts & Social Sciences",
        Duration: "12 Month",
        Department: "Department of English",
        Credits: "42",
        Award: "MA",
        Location: "RPSU Campus",
      },
      career: [
        "Software Development: Engineer, Web Dev, Mobile Dev",
        "Data Science: Analyst, Scientist",
        "AI & Machine Learning: Engineer, Analyst",
        "Cybersecurity: Analyst, Tester",
        "Cloud Computing: Architect, Admin",
        "Game Development: Designer, Programmer",
        "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
        "Research & Academia: Assistant, Lecturer",
      ],
      "1st Semester": {
        "First Semester": [
          {
            "courseCode": "0231GED 511",
            "courseTitle": "Research Methodology",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "courseCode": "0232ENG 512",
            "courseTitle": "20th Century Literature",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "courseCode": "0232ENG 513",
            "courseTitle": "Continental Literature",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "courseCode": "0232ENG 514",
            "courseTitle": "William Shakespeare",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "courseCode": "0232ENG 515",
            "courseTitle": "Critical Theory",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "courseCode": "0231ENG 516",
            "courseTitle": "Practice Teaching and Presentation",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "courseCode": "0231ENG 517",
            "courseTitle": "Syllabus Design and Material Development",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ]
      },
      "2nd Semester": {
        "Second Semester": [
          {
            "courseCode": "0232ENG 521",
            "courseTitle": "African and Caribbean Literature",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "courseCode": "0232ENG 522",
            "courseTitle": "South Asian Literature in English",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "courseCode": "0232ENG 523",
            "courseTitle": "Language Testing, Evaluation and Assessment",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "courseCode": "0231ENG 524",
            "courseTitle": "Semantics and Pragmatics",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "courseCode": "0231ENG 525",
            "courseTitle": "Principles and Methods of English Language Teaching",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "courseCode": "0232ENG 600",
            "courseTitle": "Thesis",
            "credit": 6,
            "hoursPerWeek": "6+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ]
      },
      
    },
  },
  {
    name: "Law & Human Rights",
    slug: "bachelor-of-laws",
    image: "/llb.webp",
    departmentSlug: "law",
    head: {
      name: "Dr. Salena Akter",
      slug: "dr-salena-akter",
      title: "Head of the Department",
      image: "/dr-salena-akter.jpg",
      message:
        "Welcome to the Department of Law & Human Rights at Ranada Prasad Shaha University. Our mission is to provide students with a comprehensive understanding of the legal system, human rights, and social justice. We aim to foster critical thinking, creativity, and effective communication skills that are essential for personal growth and professional success. Our dedicated faculty members are committed to creating a supportive learning environment that encourages intellectual curiosity, cultural diversity, and academic excellence. Join us to explore the rich world of law and human rights and embark on a journey of self-discovery and lifelong learning."},
    tabData: {
      "course-details": {
        School: "School of Arts & Social Sciences",
        Duration: "4 Years",
        Department: "Department of Law & Human Rights",
        Credits: "141",
        Award: "LLB",
        Location: "RPSU Campus",
      },
      career: [
        "Software Development: Engineer, Web Dev, Mobile Dev",
        "Data Science: Analyst, Scientist",
        "AI & Machine Learning: Engineer, Analyst",
        "Cybersecurity: Analyst, Tester",
        "Cloud Computing: Architect, Admin",
        "Game Development: Designer, Programmer",
        "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
        "Research & Academia: Assistant, Lecturer",
      ],
      "year-1": {
        "1st Semester": [
          {
            "number": 1,
            "courseCode": "LLB 1101",
            "courseTitle": "Legal System of Bangladesh",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "LLB 1102",
            "courseTitle": "Jurisprudence",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "LLB 1103",
            "courseTitle": "Law of Contract",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "LLB 1104",
            "courseTitle": "Government and Politics",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "GED 1101",
            "courseTitle": "History of Emergence of Bangladesh",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "GED 1102",
            "courseTitle": "Elementary English",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ],
        "2nd Semester": [
          {
            "number": 1,
            "courseCode": "LLB 1205",
            "courseTitle": "Muslim Law",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "LLB 1206",
            "courseTitle": "Hindu Law",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "LLB 1207",
            "courseTitle": "Law of Equity and Trust",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "LLB 1208",
            "courseTitle": "Law of Torts",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "GED 1203",
            "courseTitle": "Computer Literacy",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "GED 1204",
            "courseTitle": "Introduction to Bangla Language and Literature",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ]
      },
      "year-2": {
        "3rd Semester": [
          {
            "number": 13,
            "courseCode": "LLB 2309",
            "courseTitle": "Constitutional Law of Bangladesh",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 1,
            "courseCode": "LLB 2310",
            "courseTitle": "Constitutional Law of UK and USA",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "LLB 2311",
            "courseTitle": "General Clauses Act and Interpretation of Statutes",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "LLB 2312",
            "courseTitle": "Labor and Industrial Law",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "GED 2305",
            "courseTitle": "Bangladesh Studies",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "GED 2306",
            "courseTitle": "General Mathematics",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ],
        "4th Semester": [
          {
            "number": 1,
            "courseCode": "LLB 2413",
            "courseTitle": "Criminal Laws I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "LLB 2414",
            "courseTitle": "Law of Specific Relief & Limitations",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "LLB 2415",
            "courseTitle": "Law of Registration & Public Demands Recovery",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "LLB 2416",
            "courseTitle": "Company and Partnership Law",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "GED 2407",
            "courseTitle": "International Relations",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "GED 2408",
            "courseTitle": "Organizational Behavior",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ]
      },
       
      "year-3": {
        "5th Semester": [
          {
            "number": 1,
            "courseCode": "LLB 3517",
            "courseTitle": "Code of Civil Procedure I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "LLB 3518",
            "courseTitle": "Code of Criminal Procedure I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "LLB 3519",
            "courseTitle": "Criminal Laws II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "LLB 3520",
            "courseTitle": "Mercantile Law",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "LLB 3521",
            "courseTitle": "Administrative Law",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "GED 3509",
            "courseTitle": "Psychology",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ],
        "6th Semester": [
          {
            "number": 1,
            "courseCode": "LLB 3622",
            "courseTitle": "Code of Civil Procedure II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "LLB 3623",
            "courseTitle": "Code of Criminal Procedure II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "LLB 3624",
            "courseTitle": "Law of Evidence",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "LLB 3625",
            "courseTitle": "Banking and Security Laws",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "LLB 3626",
            "courseTitle": "Criminology",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "GED 3610",
            "courseTitle": "Medical Jurisprudence",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ]
      }
      ,
      "year-4": {
        "7th Semester": [
          {
            "number": 1,
            "courseCode": "LLB 4727",
            "courseTitle": "Land Laws of Bangladesh",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "LLB 4728",
            "courseTitle": "Law of Transfer of Property",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "LLB 4729",
            "courseTitle": "Law of Taxation",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "LLB 4730",
            "courseTitle": "Drafting and Conveyance",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "LLB 4731",
            "courseTitle": "International Law",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "GED 4711",
            "courseTitle": "Research Ethics",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ],
        "8th Semester": [
          {
            "number": 1,
            "courseCode": "LLB 4832",
            "courseTitle": "Dissertation",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "LLB 4833",
            "courseTitle": "Trial Advocacy I",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "LLB 4834",
            "courseTitle": "Trial Advocacy II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "LLB 4835",
            "courseTitle": "Viva Voce",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "GED 4812",
            "courseTitle": "Entrepreneurship",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ]
      },
      
    },
  },
  {
    name: "Bachelor in Fashion & Design (Hons.)",
    slug: "bachelor-of-fashion-and-design",
    image: "/tfd.webp",
    departmentSlug: "fashion-and-design",
    head: {
      name: "Tanzil Hasnain Moin Roneet",
      slug: "tanzil-hasnain-moin-roneet",
      title: "Head of the Department",
      image: "/tanzil-hasnain-moin-roneet.jpg",
      message:
        "Welcome to the Department of Fashion & Design at Ranada Prasad Shaha University. Our mission is to provide students with a comprehensive understanding of fashion, design, and creativity. We aim to foster critical thinking, innovation, and effective communication skills that are essential for personal growth and professional success. Our dedicated faculty members are committed to creating a supportive learning environment that encourages artistic expression, cultural diversity, and academic excellence. Join us to explore the exciting world of fashion and design and embark on a journey of self-discovery and lifelong learning."},
    tabData: {
      "course-details": {
        School: "Kumudini School of Fashion & Design",
        Duration: "4 Years",
        Department: "Department of Fashion & Design",
        Credits: "158",
        Award: "Bachelor's Degree",
        Location: "RPSU Campus",
      },
      career: [
        "Software Development: Engineer, Web Dev, Mobile Dev",
        "Data Science: Analyst, Scientist",
        "AI & Machine Learning: Engineer, Analyst",
        "Cybersecurity: Analyst, Tester",
        "Cloud Computing: Architect, Admin",
        "Game Development: Designer, Programmer",
        "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
        "Research & Academia: Assistant, Lecturer",
      ],
      "year-1": {
        "1st Semester": [
          {
            "number": 1,
            "courseCode": "GED 101",
            "courseTitle": "Bangla Language",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "GED 110",
            "courseTitle": "Application of Computer",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "BFD 101",
            "courseTitle": "Basic Fashion Studies",
            "credit": 2,
            "hoursPerWeek": "2+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "BFD 411",
            "courseTitle": "Natural Textile Fibre",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "BFD 104",
            "courseTitle": "Fashion Design-I (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "GED 102",
            "courseTitle": "Business & Communicative English",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "GED 103",
            "courseTitle": "Business & Communicative English (Practical)",
            "credit": 1,
            "hoursPerWeek": "0+1",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 8,
            "courseCode": "GED 113",
            "courseTitle": "Emergence of the History of Independent Bangladesh",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ],
        "2nd Semester": [
          {
            "number": 1,
            "courseCode": "BFD 102",
            "courseTitle": "Art, Design, and Culture Study",
            "credit": 2,
            "hoursPerWeek": "2+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "BFD 201",
            "courseTitle": "Pattern Drafting-I (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "BFD 108",
            "courseTitle": "Fashion Illustration-I (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "BFD 209",
            "courseTitle": "Man Made Textile Fibre (Theory)",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "BFD 107",
            "courseTitle": "Fashion History",
            "credit": 2,
            "hoursPerWeek": "2+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "GED 105",
            "courseTitle": "Basic Chemistry",
            "credit": 2,
            "hoursPerWeek": "2+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "BFD 403",
            "courseTitle": "Apparel Manufacturing-I",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 8,
            "courseCode": "BFD 404",
            "courseTitle": "Apparel Manufacturing-I (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ]
      },
      "year-2": {
        "3rd Semester": [
          {
            "number": 1,
            "courseCode": "BFD 211",
            "courseTitle": "Fashion Photography (Practical)",
            "credit": 2,
            "hoursPerWeek": "0+2",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "BFD 105",
            "courseTitle": "Fashion Design-II (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "GED 104",
            "courseTitle": "Bangladesh Studies",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "BFD 109",
            "courseTitle": "Fashion Illustration-II (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "BFD 202",
            "courseTitle": "Pattern Drafting-II (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "BFD 401",
            "courseTitle": "Fibre Yarn & Fabric",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "GED 109",
            "courseTitle": "Consumer Behaviour",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ],
        "4th Semester": [
          {
            "number": 1,
            "courseCode": "GED 112",
            "courseTitle": "Basic Statistics",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "GED 106",
            "courseTitle": "Environmental Studies",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "BFD 204",
            "courseTitle": "E-Fashion-I (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "GED 107",
            "courseTitle": "Human Resource Management",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "BFD 110",
            "courseTitle": "Draping-I (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "BFD 408",
            "courseTitle": "Fabric Structure & Design",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "BFD 409",
            "courseTitle": "Fabric Structure & Design (Practical)",
            "credit": 1,
            "hoursPerWeek": "0+1",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 8,
            "courseCode": "BFD 310",
            "courseTitle": "Fashion Brand Analysis & Development",
            "credit": 2,
            "hoursPerWeek": "2+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ]
      },
       
      "year-3": {
        "5th Semester": [
          {
            "number": 1,
            "courseCode": "BFD 111",
            "courseTitle": "Draping-II",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "GED 114",
            "courseTitle": "Industrial Physiology",
            "credit": 2,
            "hoursPerWeek": "2+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "BFD 301",
            "courseTitle": "Creative Design Analysis & Collection (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "BFD 405",
            "courseTitle": "Apparel Manufacturing-II",
            "credit": 1,
            "hoursPerWeek": "1+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "BFD 406",
            "courseTitle": "Apparel Manufacturing-II (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "BFD 205",
            "courseTitle": "E-Fashion-II (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "BFD 306",
            "courseTitle": "Fashion Marketing",
            "credit": 2,
            "hoursPerWeek": "2+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 8,
            "courseCode": "BFD 308",
            "courseTitle": "Fashion Forecasting & Trend Analysis",
            "credit": 2,
            "hoursPerWeek": "2+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ],
        "6th Semester": [
          {
            "number": 1,
            "courseCode": "BFD 210",
            "courseTitle": "Textile Coloration & Surface Ornamentation (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "BFD 302",
            "courseTitle": "Product Development (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "BFD 203",
            "courseTitle": "Pattern Drafting-III (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "GED 111",
            "courseTitle": "Sociology",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "BFD 507",
            "courseTitle": "Dyeing Printing & Finishing (Practical)",
            "credit": 2,
            "hoursPerWeek": "0+2",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "BFD 206",
            "courseTitle": "CAD-I (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "GED 108",
            "courseTitle": "Corporate Social Responsibility",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 8,
            "courseCode": "BFD 402",
            "courseTitle": "Dyeing Printing & Finishing",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ]
      },
      "year-4": {
        "7th Semester": [
          {
            "number": 1,
            "courseCode": "BFD 307",
            "courseTitle": "Fashion Merchandising & Retailing",
            "credit": 2,
            "hoursPerWeek": "2+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "BFD 309",
            "courseTitle": "Sustainable Fashion Design (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "BFD 311",
            "courseTitle": "Special Clothing & Material",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 4,
            "courseCode": "BFD 207",
            "courseTitle": "CAD-II (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 5,
            "courseCode": "BFD 407",
            "courseTitle": "Care Renovation & Finishing of Textile",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 6,
            "courseCode": "BFD 303",
            "courseTitle": "Portfolio Development (Practical)",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 7,
            "courseCode": "BFD 506",
            "courseTitle": "Textile Testing & Quality Control",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ],
        "8th Semester": [
          {
            "number": 1,
            "courseCode": "BFD 304",
            "courseTitle": "Final Dress Collection",
            "credit": 9,
            "hoursPerWeek": "0+9",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 2,
            "courseCode": "BFD 502",
            "courseTitle": "Project Work & Viva",
            "credit": 3,
            "hoursPerWeek": "3+0",
            "preRequisite": "None",
            "coRequisite": "-"
          },
          {
            "number": 3,
            "courseCode": "BFD 501",
            "courseTitle": "Industrial Attachment",
            "credit": 3,
            "hoursPerWeek": "0+3",
            "preRequisite": "None",
            "coRequisite": "-"
          }
        ]
      },
      
    },
  },


];

export default courseData;
