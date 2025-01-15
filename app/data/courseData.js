const courseData = [
  {
    name: "BSc. Computer Science & Engineering(CSE)",
    slug: "bachelor-of-science-in-computer-science-and-engineering",
    image: "/cse.webp",
    tabData: 
      {
        "course-details": {
          School: "School of Engineering",
          Duration: "4 years",
          Department: "Department of CSE",
          Credits: "150",
          Award: "BSc.",
          Location: "RPSU Campus",
        },
        "career": [
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
                courseTitle:
                  "History of the Emergence of Independent Bangladesh",
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
        "year-2":{
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
                courseTitle:
                  "Differential Equations and Fourier Transformation",
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
                courseTitle:
                  "Microprocessor and Assembly Language Programming Lab",
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
                courseTitle:
                  "Software Engineering and Information System Design",
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
                    "number": 1,
                    "courseCode": "0613-CSE-4101",
                    "courseTitle": "Data Mining and Data Warehousing",
                    "credit": 3,
                    "hoursPerWeek": 3,
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 2,
                    "courseCode": "0612-CSE-4102",
                    "courseTitle": "Network Security",
                    "credit": 3,
                    "hoursPerWeek": 3,
                    "preRequisite": "0612-CSE-3203",
                    "coRequisite": "-"
                  },
                  {
                    "number": 3,
                    "courseCode": "0613-CSE-4103",
                    "courseTitle": "Computer Graphics",
                    "credit": 3,
                    "hoursPerWeek": 3,
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 4,
                    "courseCode": "0613-CSE-4104",
                    "courseTitle": "Computer Graphics Lab",
                    "credit": 1,
                    "hoursPerWeek": 2,
                    "preRequisite": "0613-CSE-4103",
                    "coRequisite": "-"
                  },
                  {
                    "number": 5,
                    "courseCode": "0612-CSE-4105",
                    "courseTitle": "Technical Writing Lab",
                    "credit": 1,
                    "hoursPerWeek": 2,
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 6,
                    "courseCode": "0413-CSE-4106",
                    "courseTitle": "IT Organization and Management",
                    "credit": 3,
                    "hoursPerWeek": 3,
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 7,
                    "courseCode": "Optional Course II",
                    "courseTitle": "-",
                    "credit": 3,
                    "hoursPerWeek": 3,
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 8,
                    "courseCode": "Special Elective Course II",
                    "courseTitle": "-",
                    "credit": 3,
                    "hoursPerWeek": 3,
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 9,
                    "courseCode": "Special Elective Course Lab II",
                    "courseTitle": "-",
                    "credit": 1,
                    "hoursPerWeek": 2,
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 10,
                    "courseCode": "",
                    "courseTitle": "",
                    "credit": 21,
                    "hoursPerWeek": 24,
                    "preRequisite": "",
                    "coRequisite": "Total: "
                  }
                ],
                "8th Semester": [
                  {
                    "number": 1,
                    "courseCode": "0612-CSE-4201",
                    "courseTitle": "Internship with Seminar",
                    "credit": 6,
                    "hoursPerWeek": "-",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 2,
                    "courseCode": "0613-CSE-4202",
                    "courseTitle": "Project with Seminar",
                    "credit": 6,
                    "hoursPerWeek": "-",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 3,
                    "courseCode": "0613-CSE-4203",
                    "courseTitle": "Thesis with Seminar",
                    "credit": 6,
                    "hoursPerWeek": "-",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 4,
                    "courseCode": "",
                    "courseTitle": "",
                    "credit": 6,
                    "hoursPerWeek": "-",
                    "preRequisite": "",
                    "coRequisite": "Total: "
                  }
                ]
              }
         
      },
  },
  {
    "name": "Bachelor of Science in Electrical & Electronic Engineering(EEE)",
    "slug": "bachelor-of-science-in-electrical-and-electronic-engineering",
    tabData:
        {
        "course-details": {
          School: "School of Engineering",
          Duration: "4 years",
          Department: "Department of EEE",
          Credits: "147",
          Award: "BSc.",
          Location: "RPSU Campus",
        },
        "career": [
          "Software Development: Engineer, Web Dev, Mobile Dev",
          "Data Science: Analyst, Scientist",
          "AI & Machine Learning: Engineer, Analyst",
          "Cybersecurity: Analyst, Tester",
          "Cloud Computing: Architect, Admin",
          "Game Development: Designer, Programmer",
          "IoT & Embedded Systems: IoT Dev, Firmware Engineer",
          "Research & Academia: Assistant, Lecturer",
        ],
        "year-1": 
              {
                "1st Semester": [
                  {
                    "number": 1,
                    "courseCode": "MAT-112",
                    "courseTitle": "Differential and Integral Calculus",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 2,
                    "courseCode": "PHY-113",
                    "courseTitle": "Physics I",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 3,
                    "courseCode": "PHY-114",
                    "courseTitle": "Physics I Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "PHY-113",
                    "coRequisite": "-"
                  },
                  {
                    "number": 4,
                    "courseCode": "GED-115",
                    "courseTitle": "Computer Fundamentals",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 5,
                    "courseCode": "GED-116",
                    "courseTitle": "Computer Application Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "GED-115",
                    "coRequisite": "-"
                  },
                  {
                    "number": 6,
                    "courseCode": "GED-118",
                    "courseTitle": "History of the Emergence of Independent Bangladesh",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 7,
                    "courseCode": "EEE-123",
                    "courseTitle": "Electrical Circuits I",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "PHY-113",
                    "coRequisite": "-"
                  },
                  {
                    "number": 8,
                    "courseCode": "EEE-124",
                    "courseTitle": "Electrical Circuits I Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "PHY-114",
                    "coRequisite": "-"
                  },
                  {
                    "number": 9,
                    "courseCode": "EEE-132",
                    "courseTitle": "Electronic Circuits I",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "PHY-113",
                    "coRequisite": "-"
                  },
                  {
                    "number": 10,
                    "courseCode": "EEE-133",
                    "courseTitle": "Electronic Circuits I Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "PHY-114",
                    "coRequisite": "-"
                  },
                  {
                    "number": null,
                    "courseCode": "",
                    "courseTitle": "",
                    "credit": 20,
                    "hoursPerWeek": "20",
                    "preRequisite": "",
                    "coRequisite": "Total Credits"
                  }
                ],
                "2nd Semester": [
                  {
                    "number": 1,
                    "courseCode": "ENG-121",
                    "courseTitle": "English Language Skills Development",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 2,
                    "courseCode": "CHM-125",
                    "courseTitle": "Chemistry",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 3,
                    "courseCode": "MAT-122",
                    "courseTitle": "Coordinate Geometry & Vector Analysis",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "MAT-112",
                    "coRequisite": "-"
                  },
                  {
                    "number": 4,
                    "courseCode": "EEE-134",
                    "courseTitle": "Electrical Circuits II",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "EEE-123",
                    "coRequisite": "-"
                  },
                  {
                    "number": 5,
                    "courseCode": "EEE-135",
                    "courseTitle": "Electrical Circuits II Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "EEE-124",
                    "coRequisite": "-"
                  },
                  {
                    "number": 6,
                    "courseCode": "EEE-213",
                    "courseTitle": "Electronic Circuits II",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "EEE-132",
                    "coRequisite": "-"
                  },
                  {
                    "number": 7,
                    "courseCode": "EEE-214",
                    "courseTitle": "Electronic Circuits II Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "EEE-133",
                    "coRequisite": "-"
                  },
                  {
                    "number": 8,
                    "courseCode": "GED-127",
                    "courseTitle": "Professional Ethics and Environmental Protection",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": null,
                    "courseCode": "",
                    "courseTitle": "",
                    "credit": 20,
                    "hoursPerWeek": "20",
                    "preRequisite": "",
                    "coRequisite": "Total Credits"
                  }
                ]
              }
        ,
        "year-2": 
              {
                "3rd Semester": [
                  {
                    "number": 1,
                    "courseCode": "MAT-131",
                    "courseTitle": "Linear Algebra and Complex Variables",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "MAT-122",
                    "coRequisite": "-"
                  },
                  {
                    "number": 2,
                    "courseCode": "EEE-215",
                    "courseTitle": "Electrical Machines – I",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "EEE-123",
                    "coRequisite": "-"
                  },
                  {
                    "number": 3,
                    "courseCode": "EEE-215",
                    "courseTitle": "Electrical Machines – I Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "EEE-123",
                    "coRequisite": "-"
                  },
                  {
                    "number": 4,
                    "courseCode": "MAT-221",
                    "courseTitle": "Basic Statistics and Probability",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "MAT-112",
                    "coRequisite": "-"
                  },
                  {
                    "number": 5,
                    "courseCode": "EEE-225",
                    "courseTitle": "Introductions to Computer Programming",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "GED-116",
                    "coRequisite": "-"
                  },
                  {
                    "number": 6,
                    "courseCode": "EEE-226",
                    "courseTitle": "Introduction to Computer Programming Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "GED-116",
                    "coRequisite": "-"
                  },
                  {
                    "number": 7,
                    "courseCode": "ME-231",
                    "courseTitle": "Mechanical Engineering",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 8,
                    "courseCode": "ME-232",
                    "courseTitle": "Mechanical Engineering Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": null,
                    "courseCode": "",
                    "courseTitle": "",
                    "credit": 20,
                    "hoursPerWeek": "20",
                    "preRequisite": "",
                    "coRequisite": "Total Credits"
                  }
                ],
                "4th Semester": [
                  {
                    "number": 1,
                    "courseCode": "GED-128",
                    "courseTitle": "Bangla Language",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 2,
                    "courseCode": "EEE-223",
                    "courseTitle": "Electrical Machines – II",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "EEE-215",
                    "coRequisite": "-"
                  },
                  {
                    "number": 3,
                    "courseCode": "EEE-224",
                    "courseTitle": "Electrical Machines – II Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "EEE-216",
                    "coRequisite": "-"
                  },
                  {
                    "number": 4,
                    "courseCode": "MAT-211",
                    "courseTitle": "Differential Equations and Special Functions",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "MAT-131",
                    "coRequisite": "-"
                  },
                  {
                    "number": 5,
                    "courseCode": "MAT-355",
                    "courseTitle": "Numerical Methods and Computer Programming",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 6,
                    "courseCode": "EEE-234",
                    "courseTitle": "Digital Electronics",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "EEE-132 & EEE-134",
                    "coRequisite": "-"
                  },
                  {
                    "number": 7,
                    "courseCode": "EEE-235",
                    "courseTitle": "Digital Electronics Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "EEE-133 & EEE-135",
                    "coRequisite": "-"
                  },
                  {
                    "number": 8,
                    "courseCode": "EEE-311",
                    "courseTitle": "Communication Engineering",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 9,
                    "courseCode": "EEE-311",
                    "courseTitle": "Communication Engineering Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "-",
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
              }
        ,
        "year-3": 
              {
                "5th Semester": [
                  {
                    "number": 1,
                    "courseCode": "GED-353",
                    "courseTitle": "Bangladesh Studies",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 2,
                    "courseCode": "EEE-312",
                    "courseTitle": "Signals & Systems",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 3,
                    "courseCode": "GED-222",
                    "courseTitle": "Financial & Managerial Accounting",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 4,
                    "courseCode": "EEE-450",
                    "courseTitle": "Instrumentation & Measurement",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "EEE-215, EEE-223",
                    "coRequisite": "-"
                  },
                  {
                    "number": 5,
                    "courseCode": "EEE-451",
                    "courseTitle": "Instrumentation & Measurement Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "EEE-215, EEE-223",
                    "coRequisite": "-"
                  },
                  {
                    "number": 6,
                    "courseCode": "EEE-322",
                    "courseTitle": "Solid State Device",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "EEE-132, EEE-134",
                    "coRequisite": "-"
                  },
                  {
                    "number": 7,
                    "courseCode": "GED-333",
                    "courseTitle": "Engineering Management",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 8,
                    "courseCode": "EEE-324",
                    "courseTitle": "Electrical & Electronic Design Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "EEE-215, EEE-223",
                    "coRequisite": "-"
                  },
                  {
                    "number": null,
                    "courseCode": "",
                    "courseTitle": "",
                    "credit": 20,
                    "hoursPerWeek": "20",
                    "preRequisite": "",
                    "coRequisite": "Total Credits"
                  }
                ],
                "6th Semester": [
                  {
                    "number": 1,
                    "courseCode": "EEE-333",
                    "courseTitle": "Electrical Properties of Materials",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 2,
                    "courseCode": "EEE-331",
                    "courseTitle": "Control Systems",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "MAT-131",
                    "coRequisite": "-"
                  },
                  {
                    "number": 3,
                    "courseCode": "EEE-332",
                    "courseTitle": "Control Systems Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "MAT-131",
                    "coRequisite": "-"
                  },
                  {
                    "number": 4,
                    "courseCode": "GED-321",
                    "courseTitle": "Engineering Economics",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 5,
                    "courseCode": "EEE-439",
                    "courseTitle": "Microprocessors & Computer Interfacing",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "EEE-234",
                    "coRequisite": "-"
                  },
                  {
                    "number": 6,
                    "courseCode": "EEE-440",
                    "courseTitle": "Microprocessors & Computer Interfacing Lab",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "EEE-234",
                    "coRequisite": "-"
                  },
                  {
                    "number": 7,
                    "courseCode": "EEE-413",
                    "courseTitle": "Power System-I",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "EEE-215, EEE-223",
                    "coRequisite": "-"
                  },
                  {
                    "number": 8,
                    "courseCode": "Elective Course - 1",
                    "courseTitle": "Elective Course - 1",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 9,
                    "courseCode": "Elective Course Lab - 2",
                    "courseTitle": "Elective Course Lab - 2",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "-",
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
              }
        ,
        "year-4": 
              {
                "7th Semester": [
                  {
                    "number": 1,
                    "courseCode": "EEE-313",
                    "courseTitle": "Fields & Waves",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "PHY-113",
                    "coRequisite": "-"
                  },
                  {
                    "number": 2,
                    "courseCode": "Elective Course - 3",
                    "courseTitle": "Elective Course - 3",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 3,
                    "courseCode": "Elective Course Lab - 4",
                    "courseTitle": "Elective Course Lab - 4",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 4,
                    "courseCode": "Elective Course - 5",
                    "courseTitle": "Elective Course - 5",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 5,
                    "courseCode": "Elective Course Lab- 6",
                    "courseTitle": "Elective Course Lab- 6",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 6,
                    "courseCode": "Elective Course - 7",
                    "courseTitle": "Elective Course - 7",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 7,
                    "courseCode": "Elective Course Lab - 8",
                    "courseTitle": "Elective Course Lab - 8",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 8,
                    "courseCode": "Elective Course - 9",
                    "courseTitle": "Elective Course - 9",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 9,
                    "courseCode": "Elective Course - 10",
                    "courseTitle": "Elective Course - 10",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
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
                "8th Semester": [
                  {
                    "number": 1,
                    "courseCode": "Elective Course - 11",
                    "courseTitle": "Elective Course - 11",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 2,
                    "courseCode": "Elective Course Lab - 12",
                    "courseTitle": "Elective Course Lab - 12",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 3,
                    "courseCode": "Elective Course - 13",
                    "courseTitle": "Elective Course - 13",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 4,
                    "courseCode": "Elective Course Lab- 14",
                    "courseTitle": "Elective Course Lab- 14",
                    "credit": 1,
                    "hoursPerWeek": "0+1",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 5,
                    "courseCode": "Elective Course - 15",
                    "courseTitle": "Elective Course - 15",
                    "credit": 3,
                    "hoursPerWeek": "3+0",
                    "preRequisite": "-",
                    "coRequisite": "-"
                  },
                  {
                    "number": 6,
                    "courseCode": "EEE-444",
                    "courseTitle": "Project/Thesis",
                    "credit": 6,
                    "hoursPerWeek": "6+0",
                    "preRequisite": "-",
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
              }
          
        }
    
  }
];

export default courseData;
