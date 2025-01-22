const dataset = [
    {
      _id: "ObjectId1",
      name: "Trina Saha",
      designation: "Assistant Professor",
      dept:"cse",
      image: "/trina-saha.jpg",
      slug: "trina-saha",
      email: "trinasahansu@gmail.com",
      overview:
        "I have completed my graduation & post graduation from North South University in Computer Science & Engineering. I have completed various advanced courses in my MSc program following the 'Software Engineering' trail. Now I am looking for an environment where I can utilize my knowledge into teaching field and make a contribution to enhance the education sector of Bangladesh.",
      current_research_works: [
        "How to secure Underwater Wireless Communication Network",
        "Comparison between UML model and FSM model using Model Based Testing approach",
        "Covid-19 Outbreak Prediction & Data Visualization",
        "A Broad Classification and Comparison of Regression Testing Techniques",
        "Who is popularizing INSTAGRAM: Teens or Adults",
      ],
      research_interests: null,
      education: [
        {
          degree:
            "M.Sc. (Master of Science) in Computer Science and Engineering",
          university_name: "North South University",
          location: "Dhaka, Bangladesh",
        },
        {
          degree:
            "B.Sc. (Bachelor of Science) in Computer Science and Engineering",
          university_name: "North South University",
          location: "Dhaka, Bangladesh",
        },
      ],
      work_experience: [
        {
          start_date: "2022-02-10",
          end_date: null,
          role: "Assistant Professor",
          organization_name: "State University of Bangladesh",
          location: "Dhaka, Bangladesh",
          website_link: "https://www.sub.ac.bd/faculty/47",
        },
        {
          start_date: "2019-08-18",
          end_date: "2022-02-07",
          role: "Lecturer",
          organization_name: "City University",
          location: "Dhaka, Bangladesh",
          website_link: null,
        },
        {
          start_date: "2019-03-03",
          end_date: "2019-08-08",
          role: "Software Developer (Django)",
          organization_name: "Barikoi Technologies Limited",
          location: "Dhaka, Bangladesh",
          website_link: null,
        },
      ],
      research_works: [
        {title:"Saha, T., Baidya, J., Moyashir, R., & Palit, R. (2017, January). Design and implementation of a fingerprint based lock system for shared access. In 2017 IEEE 7th Annual Computing and Communication Workshop and Conference (CCWC) (pp. 1-6). IEEE."},
        {title:"Saha, T., & Palit, R. (2019, December). Practices of Software Testing Techniques and Tools in Bangladesh Software Industry. In 2019 IEEE Asia-Pacific Conference on Computer Science and Data Engineering (CSDE) (pp. 1-10). IEEE "},
        {title:"Saha, T., Alam, K., (2022, September). Comparison between Property based Software Security Testing Technique with Fault Injection. In 2022 Springer 10th International Conference on innovations in Computer science & Engineering (ICICSE) (chapter 58). Springer Lecture Notes in Networks & Systems.  "},
        {title:"Alam, K., Saha, T., (2022, September). Secrecy Rate Optimization for Energy Efficient Cognitive Relay Networks. In 2022 Springer 10th International Conference on innovations in Computer science & Engineering (ICICSE) (chapter 18). Springer Lecture Notes in Networks & Systems. "},
        {title:"Trina Saha & Muntasir Hasan Kanchan (2023, December). Design of CSE Courses at the Universities in Relation to Real Life Applications. Published by Journal of SUB (volume 14). "},
      ],
    },
    {
      _id: "ObjectId2",
      name: "Rabeya Sadia",
      designation: "Lecturer",
      dept:"cse",
      image: "/rabeya-sadia.jpg",
      slug: "rabeya-sadia",
      email: "rabeyasadia8@gmail.com",
      overview: "something will be here",
      current_research_works: null,
      research_interests: [
        "Network Security",
        "Block Chain",
        "Cryptography",
        "Advanced AI",
        "Deep Learning",
        "Reinforcement Learning",
        "Natural Language Processing",
        "Image Processing",
        "Computer Vision",
        "Pattern Classification",
        "Mobile Edge Computing",
        "Task Offloading",
        "Optimization Algorithm",
      ],
      education: [
        {
          degree: "Master’s (AI & Computer Engineering)",
          university_name: "University of Ulsan",
          location: "Ulsan (South Korea)"
        },
        {
          degree: "Bachelor of Science (Computer Science and Engineering)",
          university_name: "University of Chittagong",
          location: "Chittagong (Bangladesh)"
        },
      ],
      work_experience: [
        {
          start_date: "2021-09-01",
          end_date: "2023-12-25",
          role: "Research Assistant",
          organization_name: "University of Ulsan",
          location: "Ulsan (South Korea)",
          website_link: "https://sites.google.com/view/amnl-uou/",
        },
        {
          start_date: "2019-09-01",
          end_date: "2021-10-10",
          role: "Lecturer",
          organization_name: "Port City International University",
          location: "Chittagong (Bangladesh)",
          website_link: "http://www.portcity.edu.bd/",
        },
      ],
      research_works: [
        {
          title:"Sadia, R., Akter, S. and Yoon, S., 2023. Ellipsoidal Trajectory Optimization for Minimizing Latency and Data Transmission Energy in UAV-Assisted MEC Using Deep Reinforcement Learning. Applied Sciences, 13(22), p.12136 (SCIE indexed) "
        },
        {
          title:"Sadia, R. and Yoon, S., 2023. 3D Placement Optimization of MEC enabled UAV for Data Transmission with Lower Latency and Energy Consumption. 한국통신학회학술대회논문집 , pp.503-504"
        },
        {
          title: "Sadia, R., Rahman, M.A. and Seddiqui, M.H., 2019. N-gram statistical stemmer for bangla corpus. arXiv preprint arXiv:1912.11612 "
        },
        {
          title:"Deep RL-based Ellipsoidal Path Planning for MEC enabled UAVs to Minimize Data Transmission Latency and Energy Consumption of Mobile Devices (Master’s Thesis) An optimization problem that finds the center position, major radius, minor radius, and rotation angle of the ellipsoidal trajectory of UAV-assisted MEC servers, to minimize the total transmission latency and energy consumption of mobile devices."
        },
        {
          title: "N-gram Statistical Stemmer for Augmented Bangla Corpus (B.Sc Thesis) A stemmer clustered the related sets of words in the documents dependent on their character structure utilizing an affiliation measure named dice coefficient and producing the smallest word as the stem. "
        },
      ],
    },
    {
      _id: "ObjectId",
      name: "Aditi Roy",
      designation: "Lecturer",
      dept:"bba",
      image: "/aditi-roy.jpg",
      slug: "aditi-roy",
      email: "roy11394@gmail.com",
      overview: null,
      current_research_works: null,
      research_interests: [
        "Consumer behavior",
        "Dark tourism",
        "Work-life balance",
      ],
      education: [
        {
          degree: "MBA",
          subject: "Marketing",
          university_name: "Jagannath University",
          location: "Dhaka, Bangladesh",
        },
        {
          degree: "BBA",
          subject: "Marketing",
          university_name: "Jagannath University",
          location: "Dhaka, Bangladesh",
        },
      ],
      work_experience: [
        {
          start_date: "2020-01-01",
          end_date: "2022-06-30",
          role: "Lecturer",
          organization_name: "University of Brahmanbaria",
          location: "Brahmanbaria, Bangladesh",
          website_link: null,
          duration: "2 years and 6 months",
        },
        {
          start_date: "2018-01-01",
          end_date: "2019-12-31",
          role: "Lecturer",
          organization_name:
            "Bangladesh Institute of Business & Technology (BIBT)",
          location: "Dhaka, Bangladesh",
          website_link: null,
          duration: "2 years",
        },
        {
          start_date: "2017-03-01",
          end_date: "2017-12-31",
          role: "Lecturer",
          organization_name:
            "Atish Dipankar University of Science & Technology (ADUST)",
          location: "Dhaka, Bangladesh",
          website_link: null,
          duration: "9 months",
        },
      ],
      research_works: null,
    },
    {
      _id: "ObjectId",
      name: "Farhana Alam Proma",
      designation: "Lecturer",
      dept:"pharmacy",
      image: "/farhana-alam-proma.jpg",
      slug: "farhana-alam-proma",
      email: "farhanaproma06@gmail.com",
      overview:
        "I have a dynamic and challenging attitude about my assigned responsibilities. I am very much confident about my ability, responsibility, labor, and skill. I want to build up my career within education and training, where performance is measured through achievements.",
      current_research_works: null,
      research_interests: null,
      education: [
        {
          degree: "Master of Pharmacy (M.Pharm.)",
          subject: "Pharmacy",
          university_name: "Jagannath University",
          location: "Dhaka, Bangladesh",
        },
        {
          degree: "Bachelor of Pharmacy (B.Pharm.)",
          subject: "Pharmacy",
          university_name: "Jagannath University",
          location: "Dhaka, Bangladesh",
        },
      ],
      work_experience: [
        {
          start_date: "2022-12-04",
          end_date: "2022-12-17",
          role: "Intern",
          organization_name: "Square Pharmaceuticals LTD.",
          location: "Kaliakoir, Gazipur, Bangladesh",
          website_link: null,
          duration: "13 days",
        },
        {
          start_date: "2022-10-01",
          end_date: "2023-06-05",
          role: "Thesis Student",
          organization_name:
            "Bangladesh Council of Scientific and Industrial Research (BCSIR)",
          location: "New Elephant Road, Dhaka, Bangladesh",
          website_link: null,
          duration: "8 months",
        },
      ],
      research_works: [
        {
          title:"Tegoprazan as a New Remedy for Gastrointestinal Diseases in Comparison with its Therapeutic Predecessors: A Mini-Review Current drug research reviews, 10.2174/2589977515666230428140741. 28 Apr. 2023, doi:10.2174/2589977515666230428140741 "
        },
      ],
    },
    {
      _id: "ObjectId3",
      name: "Kanika Chakraborty",
      designation: "Lecturer",
      dept:"english",
      image: "/kanika-chakraborty.jpg",
      slug: "kanika-chakraborty",
      email: "chakrabortykanika11@gmail.com",
      overview: "something will be here",
      current_research_works: null,
      research_interests: [],
      education: [
        {
          degree: "MA in English Literature",
          university_name: "North-Eastern Hill University",
          location: "Shillong (Meghalaya)",
        },
        {
          degree: "MA in English Language Teaching (ELT)",
          university_name: "East West University",
          location: "Dhaka (Bangladesh)",
        },
        {
          degree: "BA (Hons) in English",
          university_name: "Stamford University Bangladesh",
          location: "Dhaka (Bangladesh)",
        }
      ],
      work_experience: [
        {
          start_date: null,
          end_date: null,
          role: "Assistant Teacher, Senior Section",
          organization_name: "Gias Uddin Chowdhury Modern Academy",
          location: "Dhaka (Bangladesh)",
          website_link: null
        },
        {
          start_date: null,
          end_date: null,
          role: "Assistant Teacher, Senior Section",
          organization_name: "South Point School & College",
          location: "Dhaka (Bangladesh)",
          website_link: null
        }
      ],
      research_works: [
        {
          title: "Street on the Hill: Essence of Shillong in Anjum Hasan’s Words (ICSSR, Tetso College Journal 2021)"
        },
        {
          title: "Representation of Women in TV Advertisements: A Linguistic Analysis (ICSSR, Sonapur College, Assam 2021)"
        },
        {
          title: "Territorial Conceptualization: Women and Nation in Sadat Hasan Manto’s Short Stories of Partition (Shastri Indo-Canadian Institute, IIT Patna 2022)"
        }
      ]
    },
    {
      _id: "ObjectId4",
      name: "Hrithik Majumdar Shibu",
      designation: "Lecturer",
      image: "/hrithik-majumdar-shibu.jpg",
      dept:"cse",
      slug: "hrithik-majumdar-shibu",
      email: "hrithik11804064@gmail.com",
      overview: "something will be here",
      current_research_works: null,
      research_interests: [],
      education: [
        {
          degree: "Bachelor of Science in CSE",
          university_name: "Shahjalal University of Science and Technology",
          location: "Sylhet (Bangladesh)",
        }
      ],
      work_experience: [],
      research_works: [
        {
          title: "Hrithik Shibu, Shrestha Datta, Zhalok Rahman, Shahrab Sami, Md. Sumon Miah, Raisa Fairooz, and Md Mollah. SUST_Black Box at BLP-2023 Task 1: Detecting Communal Violence in Texts: An Exploration of MLM and Weighted Ensemble Techniques. In Proceedings of the First Workshop on Bangla Language Processing (BLP-2023), pages 208–213, Singapore. Association for Computational Linguistics."
        },
        {
          title: "A web-based disease prediction app that predicts the risk of a bunch of diseases using knowledge-based artificial intelligence using ML and ANN technologies after thorough research on the corresponding dataset. Implemented data visualization techniques and many machine learning algorithms (SVM, LR, NN)."
        },
        {
          title: "A deep learning-based research project in which I implemented a system to detect and store the number plates of Bangladeshi vehicles to enhance security on roads and highways. Implemented using OpenCV, EasyOCR, and TensorFlow."
        },
        {
          title: "A robust and vast dataset containing 47k authentic news articles and 13k fake news articles with great potential for detecting Bangla fake news. Experimented with different linguistic and characteristic features as well as transformers. Implemented using Python, LLM (BERT), and machine learning algorithms (SVM, LR)."
        }
      ]
    },
    // {
    //   _id: "ObjectId5",
    //   name: "Nur A-Ariya Alam",
    //   designation: "Lecturer",
    //   dept:"law",
    //   image: "/nur-a-ariya-alam.jpg",
    //   slug: "nur-a-ariya-alam",
    //   email: "ariyaalam01@gmail.com",
    //   overview: "something will be here",
    //   current_research_works: null,
    //   research_interests: [],
    //   education: [
    //     {
    //       degree: "Master of Laws (LL.M.)",
    //       university_name: "East West University",
    //       location: "Dhaka (Bangladesh)",
    //     },
    //     {
    //       degree: "Bachelor of Laws (LL.B.)",
    //       university_name: "East West University",
    //       location: "Dhaka (Bangladesh)",
    //     }
    //   ],
    //   work_experience: [
    //     {
    //       start_date: "2024-01-01",
    //       end_date: null,
    //       role: "Intern",
    //       organization_name: "Attorney Raju Mahajan and Associates",
    //       location: "Bangladesh",
    //       website_link: null
    //     },
    //     {
    //       start_date: "2023-10-01",
    //       end_date: "2023-12-31",
    //       role: "Graduate Teaching Assistant (GTA)",
    //       organization_name: "Department of Law, East West University",
    //       location: "Dhaka (Bangladesh)",
    //       website_link: null
    //     },
    //     {
    //       start_date: "2023-09-01",
    //       end_date: "2022-10-31",
    //       role: "Intern",
    //       organization_name: "AGISS Research Institute",
    //       location: "Noida (Uttar Pradesh, India)",
    //       website_link: null
    //     },
    //     {
    //       start_date: "2022-03-01",
    //       end_date: "2023-07-31",
    //       role: "Research Assistant (RA)",
    //       organization_name: "Cyber Crime Awareness Foundation Bangladesh",
    //       location: "Bangladesh",
    //       website_link: null
    //     },
    //     {
    //       start_date: "2021-03-01",
    //       end_date: "2023-01-31",
    //       role: "Undergraduate Teaching Assistant (UTA)",
    //       organization_name: "Department of Social Relations and Department of Law, East West University",
    //       location: "Dhaka (Bangladesh)",
    //       website_link: null
    //     }
    //   ],
    //   research_works: [
    //     {
    //       title: "Nur-A Ariya Alam. Public Figures’ Privacy in the Contemporary Era: An Analysis From the Perspective of Right to Privacy and Freedom of Expression in Bangladesh, 2023 International Journal of Advanced Legal Research, Volume IV Issue I, https://ijalr.in/volume-4-issue-1/public-figures-privacy-in-the-contemporary-era-an-analysis-from-the-perspective-of-"
    //     },
    //     {
    //       title: "Nur-A Ariya Alam, A Critical Analysis of the Influence of Comparative Constitutional Law on the Constitutional Cases in Bangladesh, 2024 International Journal of Law and Policy Review, Volume 13 Issue I, https://drive.google.com/file/d/11mdgdwaqF2Za9IZC0JE4ztzmbap3VAIw/view"
    //     }
    //   ]
    // },
    {
      _id: "ObjectId6",
      name: "Afroza Akter",
      designation: "Lecturer",
      dept:"pharmacy",
      image: "/afroza-akter.jpg",
      slug: "afroza-akter",
      email: "afroza.reemu18@gmail.com",
      overview: "something will be here",
      current_research_works: null,
      research_interests: [],
      education: [
        {
          degree: "Master of Pharmacy in Clinical Pharmacy and Pharmacology (Thesis Group)",
          university_name: "Noakhali Science and Technology University",
          location: "Noakhali (Bangladesh)",
        },
        {
          degree: "Bachelor of Pharmacy with Honours",
          university_name: "Noakhali Science and Technology University",
          location: "Noakhali (Bangladesh)",
        }
      ],
      work_experience: [],
      research_works: [
        {
          title: "Afroza Akter, Rony Roy, Md. Anwarul Basher. In vivo Hepatoprotective and Hypoglycemic Effect of Methanolic Rhizome Extract of Schumannianthus Dichotomus, https://doi.org/10.1016/j.phyplu.2023.100459, Phytomedicine Plus, Volume 3, 2023, Article 100459"
        },
        {
          title: "Roni Roy, Jony Roy, Israt Jahan Liya, Jamiuddin Ahmed, Afroza Akter, Md. Anwarul Basher. Antioxidant and Hepatoprotective Activities of Methanolic Extract of Fimbristylis miliacea (L.) Vahl, https://doi.org/10.1016/j.phyplu.2023.100449, Phytomedicine Plus, Volume 3, 2023, Article 100449"
        }
      ]
    },
    {
      _id: "ObjectId7",
      name: "Anisur Rahman Chowdhury",
      designation: "Assistant Professor & Coordinator",
      dept:"english",
      image: "/anisur-rahman-chowdhury.png",
      slug: "anisur-rahman-chowdhury",
      email: "optimisticcosmopolitan@yahoo.com",
      overview: "something will be here",
      current_research_works: null,
      research_interests: [],
      education: [
        {
          degree: "CELTA",
          university_name: "University of Cambridge",
          location: "England",
        },
        {
          degree: "MA in English Language Teaching (ELT)",
          university_name: "International Islamic University Chittagong",
          location: "Chittagong (Bangladesh)"
        },
        {
          degree: "MA in English Language and Literature (ELL)",
          university_name: "University of Chittagong",
          location: "Chittagong (Bangladesh)"
        },
        {
          degree: "BA (Honours in English Language and Literature)",
          university_name: "University of Chittagong",
          location: "Chittagong (Bangladesh)"
        }
      ],
      work_experience: [
        {
          start_date: "2023-06-01",
          end_date: null,
          role: "English Language Trainer",
          organization_name: "Kumudini under SEIP project (Bangladesh Ministry of Finance and ADB)",
          location: "Bangladesh",
          website_link: null
        },
        {
          start_date: "2019-11-01",
          end_date: "2023-05-31",
          role: "Assistant Professor of English",
          organization_name: "Ocean Maritime Academy",
          location: "Chattogram (Bangladesh)",
          website_link: null
        },
        {
          start_date: "2017-05-01",
          end_date: null,
          role: "Facilitator (Teacher Trainer)",
          organization_name: "American Center (Chattogram Chapter)",
          location: "Chattogram (Bangladesh)",
          website_link: null
        },
        {
          start_date: "2018-08-01",
          end_date: "2019-10-31",
          role: "Lecturer",
          organization_name: "Chattogram BGMEA University of Fashion Technology",
          location: "Chattogram (Bangladesh)",
          website_link: null
        },
        {
          start_date: "2011-02-01",
          end_date: "2019-05-31",
          role: "Assistant Professor, Coordinator (Department of English), and Assistant Proctor",
          organization_name: "University of Science & Technology Chittagong (USTC)",
          location: "Chattogram (Bangladesh)",
          website_link: null
        },
        {
          start_date: "2011-03-01",
          end_date: "2017-02-28",
          role: "Facilitator",
          organization_name: "British Council Resource Centre",
          location: "Chittagong (Bangladesh)",
          website_link: null
        }
      ],
      research_works: [
        {
          title: "Mother Tongue Interference in English as a Second Language in the Perspective of Indian Sub-continent, Presented at the 3-day NELTA International Conference, Katmandu, Nepal in 2015"
        },
        {
          title: "Errors and Mistakes in English at the Tertiary Level by the Interference of Bangla, USTA 2014 (ISSN 17280435, Volume 21), 2015"
        },
        {
          title: "Reasons of Bangladeshi Learners’ Inability of Fluency in English, USTA (ISSN 17280435, Volume 24), 2020"
        },
        {
          title: "How Device Makes a Presenter a Magician, Presented at BELTA (Bangladesh English Language Teachers Association)"
        }
      ]
    },
    {
      _id: "ObjectId8",
      name: "Anupam Singha",
      designation: "Lecturer",
      dept:"cse",
      image: "/anupam-singha.png",
      slug: "anupam-singha",
      email: "anupameos@gmail.com",
      overview: "something will be here",
      current_research_works: null,
      research_interests: [
        "Deep Learning",
        "Big Data Analytics",
        "Blockchain Technology",
        "Artificial Intelligence",
        "Cloud Computing"
      ],
      education: [
        {
          degree: "Master of Technology in Big Data Analytics",
          university_name: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
          location: "Chennai, Tamil Nadu, India",
        },
        {
          degree: "Bachelor of Technology in Computer Science and Engineering",
          university_name: "National Institute Of Technology",
          location: "Silchar, Assam, India",
        }
      ],
      work_experience: [
        {
          start_date: "2022-08-01",
          end_date: "2023-06-30",
          role: "Senior Coding Instructor",
          organization_name: "Codingal",
          location: "Remote",
          website_link: null,
        },
        {
          start_date: "2023-05-01",
          end_date: "2023-06-30",
          role: "Blockchain Developer Program Participant",
          organization_name: "Nas Academy x Solana Foundation",
          location: "Virtual",
          website_link: null,
        },
        {
          start_date: "2022-05-01",
          end_date: "2022-06-30",
          role: "AWS ML-AI Virtual Intern",
          organization_name: "AICTE Internship",
          location: "Virtual",
          website_link: null,
        },
        {
          start_date: "2022-03-01",
          end_date: "2022-05-31",
          role: "Global Business Relationship Manager",
          organization_name: "Tescom Business Solutions",
          location: "Virtual",
          website_link: null,

        }
      ],
      research_works: [
        {
          title: "Deep Learning-Based Classification of Indian Classical Music Based on Raga, 2023 6th International Conference on Information Systems and Computer Networks (ISCON), 10.1109/ISCON57294.2023.10111985"
        },
        {
          title: "Green Cloud Computing - To Build A Sustainable Tomorrow, 2022 International Conference for Advancement in Technology (ICONAT), 10.1109/ICONAT53423.2022.9726052"
        }
      ]
    },
    {
      _id: "ObjectId9",
      name: "Ankan Roy",
      designation: "Lecturer",
      image: "/ankan-roy.png",
      dept:"cse",
      slug: "ankan-roy",
      email: "ankan.roy31@gmail.com",
      overview: "something will be here",
      current_research_works: null,
      research_interests: [
        "Computer Science",
        "Software Engineering",
        "Artificial Intelligence",
        "Data Science",
        "Machine Learning"
      ],
      education: [
        {
          degree: "M.Sc. in Computer Science & Engineering",
          university_name: "Jahangirnagar University",
          location: "Bangladesh",
        },
        {
          degree: "B.Sc. in Computer Science & Engineering",
          university_name: "Ranada Prasad Shaha University",
          location: "Narayanganj, Bangladesh",
        }
      ],
      work_experience: [
        {
          start_date: "2022-03-06",
          end_date: "2022-11-30",
          role: "Teaching Assistant",
          organization_name: "Ranada Prasad Shaha University",
          location: "Narayanganj-1400, Bangladesh",
          website_link: null,
        }
      ],
      research_works: []
    },
    // {
    //   _id: "ObjectId10",
    //   name: "Badhon Baria",
    //   designation: "Lecturer",
    //   dept:"fdt",
    //   image: "/badhon.webp",
    //   slug: "badhon-baria",
    //   email: "dpbadhon@gmail.com",
    //   overview: "something will be here",
    //   current_research_works: null,
    //   research_interests: null,
    //   education: [
    //     {
    //       degree: "B.Sc. in Fashion Design & Apparel Engineering",
    //       university_name: "National Institute of Textile Engineering and Research (NITER), Faculty of Engineering and Technology, University of Dhaka",
    //       location: "Dhaka, Bangladesh",
    //     }
    //   ],
    //   work_experience: [
    //     {
    //       start_date: "2023-03-01",
    //       end_date: null,
    //       role: "Assistant Designer",
    //       organization_name: "Motex Fashion & Sourcing",
    //       location: "517/6, Baridhara DOHS, Bangladesh",
    //       website_link: null,
    //     },
    //     {
    //       start_date: "2022-04-01",
    //       end_date: "2022-12-31",
    //       role: "Industrial Trainee",
    //       organization_name: "Beximco Industrial Park",
    //       location: "Sarabo, Kashimpur, Gazipur, Bangladesh",
    //       website_link: null,
    //     }
    //   ],
    //   research_works: [
    //     {
    //       title: "Minimizing the Increasing Solid Waste Garments Through Zero-Wastage Concept",
    //     }
    //   ]
    // },
    {
      "_id": "ObjectId2",
      "name": "Dr. Kazi Rakibul Islam",
      "designation": "Senior Lecturer & Program Coordinator",
      "dept": "public-health",
      "image": "/dr-kazi-rakibul-islam.jpeg",
      "slug": "dr-kazi-rakibul-islam",
      "email": "rakibselective@gmail.com",
      "overview": null,
      "current_research_works": null,
      "research_interests": null,
      "education": [
        {
          "degree": "MPH (Occupational and Environmental Health)",
          "university_name": "National Institute of Preventive and Social Medicine (Under BSMMU)",
          "location": "Mohakhali, Dhaka-1206",
        },
        {
          "degree": "MBBS",
          "university_name": "Jahurul Islam Medical College",
          "location": "Bhagalpur, Bajitpur, Kishoreganj-1212",
        }
      ],
      "work_experience": [
        {
          "start_date": "2023-06-03",
          "end_date": null,
          "role": "Assistant Director",
          "organization_name": "Eminence Associates for Social Development",
        },
        {
          "start_date": "2017-01-01",
          "end_date": "2023-03-31",
          "role": "Lecturer & Program Coordinator",
          "organization_name": "Northern University Bangladesh",
        },
        {
          "start_date": "2015-06-01",
          "end_date": "2016-06-30",
          "role": "Program Officer (Link UP)",
          "organization_name": "Marie Stopes Bangladesh (Head Office)",
        },
        {
          "start_date": "2013-07-01",
          "end_date": "2015-05-31",
          "role": "Health Line Executive (789)",
          "organization_name": "Grameen Phone",
        },
        {
          "start_date": "2013-04-01",
          "end_date": "2013-06-18",
          "role": "Medical Officer",
          "organization_name": "Hitech Multicare Hospital Limited",
        },
        {
          "start_date": "2012-07-01",
          "end_date": "2013-01-31",
          "role": "Medical Officer",
          "organization_name": "Fairways Medical Centre",
        }
      ],
      "research_works": [
        {
          "title": "Islam KR, Rahman MS, Baki J, Ali MS, Islam MK. Socio-demographic and Occupational Characteristics of Auto Rickshaw Drivers with Low Back Pain. Sch J App Med Sci ISSN 2347-954X (Print) | ISSN 2320-6691 (Online). DOI: 10.36347/sjams.2020.v08i01.023"
        },
        {
          "title": "Hossain SM, Ara U, S. Huq, Hossain MM, Ibne Mahmud AI, Islam KR. Kap Study on Hygiene and Sanitation in A Selected Rural Area of Bangladesh. Vol. 3, 2017, pp. 101-112. DOI: 10.17501/icoph.2017.3111"
        },
        {
          "title": "Hossain SM, Huq S, Khairun Naher, Naju UA, Ibne Mahmud AI, Islam KR. Prevalence of Gestational Diabetes in Some Selected Slums of Dhaka City. NUBJAS 2018; 2(1); 17-21"
        },
        {
          "title": "Islam KR, Rahman MS, Rahman MZ, Ali MS, Islam MK. Health Related Factors and Disability of Auto Rickshaw Drivers in Bangladesh. IOSR Journal of Dental and Medical Sciences (IOSR-JDMS). DOI: 10.9790/0853-1901113037"
        },
        {
          "title": "Islam KR, Rumi MIR, Roy L, Rahman S, Rahman MS. Smoking Behaviour & its Influencing Factors among Adult Population in Selected Communities of Rural Bangladesh. International Journal of Community Medicine & Public Health. DOI: 10.18203/2394-6040.ijcmph20211965"
        },
        {
          "title": "Banu B, Chowdhury SH, Akter N, Islam KR, Hossain SM, Amin MR. Preventive Behaviors to Mitigate COVID-19: Urban-Rural Disparities of Densely Populated Country like Bangladesh. Journal of Environmental Science and Public Health. DOI: 10.26502/jesph.96120142"
        },
        {
          "title": "Banu B, Akter N, Chowdhury SH, Islam KR, Islam MT, Hossain SM. Infection and Vaccination Status of COVID-19 among Healthcare Professionals in Academic Platform: Prevision vs. Reality of Bangladesh Context. PLOS ONE. DOI: 10.1371/journal.pone.0263078"
        },
        {
          "title": "Akter N, Banu B, Chowdhury SH, Islam KR, Tabassum TT, Hossain SM. Astute exploration of collective mental health events among the residents of elderly care homes. Heliyon. DOI: 10.1016/j.heliyon.2023.e18117"
        },
        {
          "title": "Tahura S, Banu B, Akter N, Chowdhury SH, Islam KR, Ghosh UK, Shahinuzzaman MM. Infection dynamics of COVID-19 in children of Bangladesh. International Journal of Science and Research Archive. DOI: 10.30574/ijsra.2023.9.2.0493"
        },
        {
          "title": "Kibria MG, Hossain A, Islam T, Islam KR, Mahmud HMM, Nabi MH, Hawlader MDH. Secondhand smoke exposure and associated factors among city residents living in multiunit housing in Bangladesh. PLOS ONE. DOI: 10.1371/journal"
        }
      ]
    },
    {
      "_id": "ObjectId3",
      "name": "A.K. Zunayet Ahammed",
      "designation": "Head & Associate Professor",
      "dept": "Department of English",
      "image": "/a-k-zunayet-ahammed.jpg",
      "slug": "a-k-zunayet-ahammed",
      "email": "zunayet1972@gmail.com",
      "overview": null,
      "current_research_works": [
        "Religious Imagery in Poet Shamsur Rahman’s Poetry", 
        "The Psychological Conflict in Robert Frost’s “Stopping by Woods on a Snowy Evening”" 
      ],
      "research_interests": null,
      "education": [
        {
          "degree": "PhD (Ongoing)",
          "university_name": "BUP",
          "location": "Mirpur Cantonment, Dhaka-1216, Bangladesh",
        },
        {
          "degree": "M.A. in English",
          "university_name": "Rajshahi University",
          "location": "Rajshahi, Bangladesh",
          "passing_year": 1995,
        },
        {
          "degree": "B.A. (Hons) in English",
          "university_name": "Rajshahi University",
          "location": "Rajshahi, Bangladesh",
        }
      ],
      "work_experience": [
        {
          "start_date": "2020-01-01",
          "end_date": "2020-12-31",
          "role": "Associate Professor & Chairman",
          "organization_name": "Sheikh Fazilatunnesa Mujib University",
        },
        {
          "start_date": "2012-01-01",
          "end_date": "2019-12-31",
          "role": "Assistant Professor",
          "organization_name": "Northern University Bangladesh",
        },
        {
          "start_date": "2008-03-01",
          "end_date": "2011-12-31",
          "role": "Senior Lecturer",
          "organization_name": "Northern University Bangladesh",
        },
        {
          "start_date": "2007-02-01",
          "end_date": "2008-02-28",
          "role": "Lecturer",
          "organization_name": "Northern University Bangladesh",
        }
      ],
      "research_works": [
        {
          "title": "Ahammed, A.K. Zunayet. 'Women in Al Mahmud’s Poetry'. Northern University Studies In English. 1. 2(2012): 29-37."
        },
        {
          "title": "Ahammed, A.K. Zunayet. 'William Blake’s “London”: A Bleak Picture of Late 18th Century London'. IOSR 21. 3(2016): 38-42."
        },
        {
          "title": "Ahammed, A.K. Zunayet. 'Marlowe’s “The Passionate Shepherd to His Love” and Nazrul’s “My Love” (Morpriyahobeesho rani): A Comparative Study of Romantic Love'. IOSR 21. 5(2016): 7-11."
        },
        {
          "title": "Ahammed, A.K. Zunayet. 'Joyce’s “Araby”: From Innocence to Experience'. EAJ 5.1(2017): 19-28."
        },
        {
          "title": "Ahammed, A.K. Zunayet. 'JibananandaDas: A Poet of Alienation and Loneliness'. BANGLAVISION 6.1(2011): 87-96."
        },
        {
          "title": "Ahammed, A.K. Zunayet. 'Joyce’s “Araby”: Love and Disillusionment'. International Journal of Applied Linguistics and English Literature (IJALEL) 4. 9(2016): 85-90."
        },
        {
          "title": "Ahammed, A.K. Zunayet. 'A Shattering Epiphany in James Joyce’s “Araby”'. Advances in Language and Literary Studies (ALLS) 8.5(2017): 140-143."
        },
        {
          "title": "Ahammed, A.K. Zunayet. 'Effective Methods of Teaching English Language in Bangladesh' (to be published)"
        }
      ]
    },
    {
      "_id": "ObjectId3",
      "name": "Tushar Ahammad",
      "designation": "Lecturer",
      "dept": "Department of Fashion and Design",
      "image": "/tushar-ahammad.png",
      "slug": "tushar-ahammad",
      "email": "tusharahammad.td@gmail.com",
      "overview": null,
      "current_research_works": null,
      "research_interests": null,
      "education": [ 
        {
          "degree": "Bachelor of Science",
          "university_name": "National Institute of Textile Engineering and Research (NITER)",
          "location": "Nayarhat, Savar, Dhaka-1344, Bangladesh",
        }
      ],
      "work_experience": null,
      "research_works": [
        {title: "Preparation and Characterization of Recycled RMG cuttings waste and jute fabric reinforced composite material"}
      ]
    },
    {
      "_id": "ObjectId4",
      "name": "Sumaiya Afrin",
      "designation": "Lecturer",
      "dept": "bba",
      "image": "/sumaiya-afrin.jpg",
      "slug": "sumaiya-afrin",
      "email": "sumaiya.rumkt@gmail.com",
      "overview": null,
      "current_research_works": [],
      "research_interests": null,
      "education": [
        {
          "degree": "MBA",
          "university_name": "University of Rajshahi",
          "location": "Rajshahi, Bangladesh",
        },
        {
          "degree": "BBA",
          "university_name": "University of Rajshahi",
          "location": "Rajshahi, Bangladesh",
        }
      ],
      "work_experience": [],
      "research_works": [
        {
          "title": "Consumers’ Attitude towards E-commerce Business During Pandemic Era: Bangladesh Perspective"
        }
      ]
    },
    {
      "_id": "ObjectId5",
      "name": "Dr. Md. Tariqul Islam",
      "designation": "Assistant Professor",
      "dept": "Department of Pharmacy",
      "image": "/dr-md-tariqul-islam.jpg",
      "slug": "dr-md-tariqul-islam",
      "email": "ariqul_phr@rpsu.edu.bd",
      "overview": null,
      "current_research_works": [],
      "research_interests": null,
      "education": [
        {
          "degree": "PhD",
          "university_name": "Asahikawa Medical University",
          "location": "Asahikawa, Japan",
        },
        {
          "degree": "M. Pharm. Research",
          "university_name": "University of Rajshahi",
          "location": "Rajshahi-6205, Bangladesh",
        },
        {
          "degree": "M. Pharm.",
          "university_name": "University of Rajshahi",
          "location": "Rajshahi-6205, Bangladesh",
        },
        {
          "degree": "B. Pharm.",
          "university_name": "University of Rajshahi",
          "location": "Rajshahi-6205, Bangladesh",
        }
      ],
      "work_experience": [
        {
          "start_date": "2018-05-01",
          "end_date": "2018-08-31",
          "role": "Senior Lecturer",
          "organization_name": "Gono Bishwabidyalay",
          "location": "Nolam, Mirzanagor, Savar, Dhaka-1344, Bangladesh"
        },
        {
          "start_date": "2011-12-01",
          "end_date": "2013-09-30",
          "role": "Lecturer",
          "organization_name": "Gono Bishwabidyalay",
          "location": "Nolam, Mirzanagor, Savar, Dhaka-1344, Bangladesh"
        },
        {
          "start_date": "2011-09-01",
          "end_date": "2011-11-30",
          "role": "Lecturer",
          "organization_name": "Institute of Medical Technology (IMT)",
          "location": "Mirpur-12, Dhaka-1216, Bangladesh"
        },
        {
          "start_date": "2010-01-01",
          "end_date": "2011-08-31",
          "role": "Lecturer (Part-time)",
          "organization_name": "Thengamara Medical Technology Institute (TMTI)",
          "location": "Gokul, Bogra, Bangladesh"
        }
      ],
      "research_works": [
        {
          "title": "Yoshitaka Imamichi, Toshio Sekiguchi, Takeshi Kitano, Takashi Kajitani, Reiko Okada, Yoshihiko Inaoka, Kaoru Miyamoto, Junsuke Uwada, Satoru Takahashi, Takahiro Nemoto, Asuka Mano, Md Rafiqul Islam Khan, Md Tariqul Islam, Koh-ichi Yuhki, Hitoshi Kashiwagi, Fumitaka Ushikubi, Nobuo Suzuki, Takanobu Taniguchi, Takashi Yazawa. Diethylstilbestrol administration inhibits theca cell androgen and granulosa cell estrogen production in immature rat ovary. Scientific Reports. 2017; 7: 8374."
        },
        {
          "title": "Junsuke Uwada, Takashi Yazawa, Md Tariqul Islam, Md Rafiqul Islam Khan, Susanne M. Krug, Michael Fromm, Shin-ichiro Karaki, Yuichi Suzuki, Atsukazu Kuwahara, Hatsumi Yoshiki, Kiyonao Sada, Muramatsu, Takanobu Taniguchi. Activation of muscarinic receptors prevents TNF-α-mediated intestinal epithelial barrier disruption through p38 MAPK. Cellular Signaling. 2017; 35: 188-196."
        },
        {
          "title": "Md Rafiqul Islam Khan, Takashi Yazawa, Junsuke Uwada, Md Tariqul Islam, Susanne M. Krug, Michael Fromm, Shin-ichiro Karaki, Yuichi Suzuki, Atsukazu Kuwahara, Hatsumi Yoshiki, Kiyonao Sada, Ikunobu Muramatsu, Abu Syed Md Anisuzzaman, Takanobu Taniguchi. Activation of muscarinic cholinoceptor ameliorates tumor necrosis factor-α-induced barrier dysfunction in intestinal epithelial cells. FEBS Letters. 2015; 589: 3640-3647."
        },
        {
          "title": "Md Rafiqul Islam Khan, Md Tariqul Islam, Takashi Yazawa, Hisayoshi Hayashi, Yuichi Suzuki, Junsuke Uwada, Abu Syed Md Anisuzzaman, Takanobu Taniguchi. Muscarinic cholinoceptor-mediated activation of JNK negatively regulates intestinal secretion in mice. Journal of Pharmacological Sciences. 2015; 127: 150-153."
        },
        {
          "title": "Md. Tariqul Islam, Md. Ajijur Rahman, Md. Anwar Ul Islam, In vitro effect of aqueous extract of fresh leaves of Abroma augusta L. on the diffusion of glucose. Bangladesh Pharmaceutical Journal, 16 (1): 21-26, 2013."
        },
        {
          "title": "Tariqul Islam, Ajijur Rahman, Anwar Ul Islam, Effects of aqueous extract of fresh leaves of Abroma augusta L. on oral absorption of glucose and metformin hydrochloride in experimental rats. ISRN Pharmaceutics. 2012; 472586."
        }
      ]
    },
    {
      "_id": "ObjectId7",
      "name": "Sourav Kantee Roy",
      "designation": "Lecturer",
      "dept": "Department of Fashion and Design",
      "image": "/sourav-kantee-roy.png",
      "slug": "sourav-kantee-roy",
      "email": "tusharahammad.td@gmail.com",
      "overview": null,
      "current_research_works": null,
      "research_interests": null,
      "education": [ 
        {
          "degree": "Bachelor of Science in Fashion Design & Apparel Engineering",
          "university_name": "National Institute of Textile Engineering and Research (NITER)",
          "location": "Nayarhat, Savar, Dhaka-1344, Bangladesh",
        }
      ],
      "work_experience": null,
      "research_works": [
        {title: "Eco-friendly sustainable dyeing of lycra viscose fabric with Allium sativum using natural and metal mordants"}
      ]
    },
    {
      "_id": "ObjectId6",
      "name": "S. M. Akber",
      "designation": "Assistant Professor",
      "dept": "Business Administration",
      "image": "/sm-akber.png",
      "slug": "sm-akber",
      "email": "akber@rpsu.edu.bd",
      "overview": null,
      "current_research_works": [],
      "research_interests": null,
      "education": [
        {
          "degree": "MBA",
          "university_name": "North South University (NSU)",
          "location": "Dhaka, Bangladesh",
        },
        {
          "degree": "BBA",
          "university_name": "East West University (EWU)",
          "location": "Dhaka, Bangladesh",
        }
      ],
      "work_experience": [
        {
          "start_date": "2012-02-01",
          "end_date": "2017-10-31",
          "role": "Lecturer (Adjunct)",
          "organization_name": "Bangladesh Institute of Business and Technology (BIBT)",
        },
        {
          "start_date": "2016-10-17",
          "end_date": "2011-01-31",
          "role": "Trainee Cash Officer",
          "organization_name": "Southeast Bank Limited",
        },
        {
          "start_date": "2015-01-01",
          "end_date": "2016-10-15",
          "role": "Lecturer (Full-time)",
          "organization_name": "Bangladesh Institute of Business and Technology (BIBT)",
        },
        {
          "start_date": "2014-09-01",
          "end_date": "2011-12-15",
          "role": "Finance Executive",
          "organization_name": "Dohatec New Media",
        },
        {
          "start_date": "2013-01-01",
          "end_date": "2014-04-30",
          "role": "Lecturer (Adjunct)",
          "organization_name": "Uttara University",
        },
        {
          "start_date": "2011-05-01",
          "end_date": "2013-08-30",
          "role": "Lecturer (Adjunct)",
          "organization_name": "Darul Ihsan University",
        }
      ],
      "research_works": [
        {
          "title": "Factors Influencing Call Money Rate in Bangladesh"
        }
      ]
    },
    {
      "_id": "ObjectId7",
      "name": "Sangeeta Chowdhury",
      "designation": "Lecturer",
      "dept": "Bangla Language and Literature",
      "image": "/sangeeta-chowdhury.jpg",
      "slug": "sangeeta-chowdhury",
      "email": "sangeeta_eng@rpsu.edu.bd",
      "overview": null,
      "current_research_works": [],
      "research_interests": null,
      "education": [
        {
          "degree": "BA (Hons) in Bangla Language and Literature",
          "university_name": "Jagannath University (JU)",
          "location": "Dhaka, Bangladesh"
        },
        {
          "degree": "MA in Bangla Language and Literature",
          "university_name": "Jagannath University (JU)",
          "location": "Dhaka, Bangladesh"
        }
      ],
      "work_experience": [],
      "research_works": []
    },
    {
      "_id": "ObjectId8",
      "name": "Shovan Kumar Paul",
      "designation": "Assistant Professor",
      "dept": "Computer Science and Engineering",
      "image": "/shovan-kumar-paul.jpg",
      "slug": "shovan-kumar-paul",
      "email": "shovan.cse@rpsu.edu.bd",
      "overview": null,
      "current_research_works": [],
      "research_interests": null,
      "education": [
        {
          "degree": "Masters Degree in Computer Science and Engineering",
          "university_name": "Chalmers University of Technology",
          "location": "Gothenburg, Sweden",
        },
        {
          "degree": "Bachelors Degree in Computer Science and Engineering",
          "university_name": "Rajshahi University of Engineering and Technology (RUET)",
          "location": "Rajshahi, Bangladesh"
        }
      ],
      "work_experience": [
        {
          "start_date": "2018-11-01",
          "end_date": "Present",
          "role": "Assistant Professor",
          "organization_name": "Anwer Khan Modern University",
          "location": "Uttara, Dhaka, Bangladesh",
        },
        {
          "start_date": "2016-06-01",
          "end_date": "2018-10-31",
          "role": "Lecturer",
          "organization_name": "Britannia University",
          "location": "Comilla, Bangladesh",
        },
        {
          "start_date": "2009-08-01",
          "end_date": "2009-12-31",
          "role": "Research Assistant",
          "organization_name": "Korea Institute of Science and Technology",
          "location": "Seoul, Korea",
        },
        {
          "start_date": "2008-08-01",
          "end_date": "2009-06-30",
          "role": "Network Engineer",
          "organization_name": "Aamra Networks Limited",
          "location": "Dhaka, Bangladesh"
        }
      ],
      "research_works": [
        {
          "title": "An experimental study of distributed consensus protocol in AUTOSAR based system, Dewan, M.S, Zaman, A. G. M., and Kumar, S.P., conference: 9th International Forum on Strategic Technology (IFOST), Bangladesh, October 2014, IEEE, isbn: 978-1-4799-6060-6, 259-263"
        }
      ]
    },
    {
      "_id": "ObjectId9",
      "name": "Maimuna Hasan",
      "designation": "Head & Assistant Professor",
      "dept": "Pharmacy",
      "image": "/maimuna-hasan.jpg",
      "slug": "maimuna-hasan",
      "email": "maimuna@rpsu.edu.bd",
      "overview": "Maimuna Hasan completed her Bachelor of Pharmacy and Master of Pharmacy from the Noakhali Science and Technology University. She joined RPSU in December, 2016. Now, she is working as an Assistant Professor in the Department of Pharmacy at R. P. Shaha University. She got prestigious NST fellowship from the Ministry of Science and Technology. She has published five research articles in reputed journals. She has research interest on Clinical Pharmacy, Biotechnology, Pharmacology and Clinical Survey. She teaches some vital courses include Biochemistry and Cellular biology, Pharmaceutical Regulatory Affairs, Cosmetology, and Physical Pharmacy. Besides, she was working as a coordinator in the Department of Pharmacy and currently she is serving as an Assistant Proctor at the R. P. Shaha University",
      "current_research_works": [],
      "research_interests": null,
      "education": [
        {
          "degree": "B. Pharm (Hons)",
          "university_name": "Noakhali Science and Technology University",
          "location": "Sonalpur, Noakhali, Bangladesh",
        },
        {
          "degree": "M. Pharm (Clinical Pharmacy & Pharmacology)",
          "university_name": "Noakhali Science and Technology University",
          "location": "Sonapur, Noakhali, Bangladesh"
        }
      ],
      "work_experience": [
        {
          "start_date": "2023-08-11",
          "end_date": "Present",
          "role": "Assistant Professor",
          "organization_name": "R. P. Shaha University (RPSU)",
          "department": "Pharmacy"
        },
        {
          "start_date": "2017-08-04",
          "end_date": "2017-10-20",
          "role": "Lecturer (C-grade pharmacist course)",
          "organization_name": "Pharmacy Council of Bangladesh"
        },
        {
          "start_date": "2014-12-25",
          "end_date": "2014-12-29",
          "role": "Trainee",
          "organization_name": "National Institute Of Biotechnology"
        },
        {
          "start_date": "2013-05-05",
          "end_date": "2013-06-05",
          "role": "In-plant trainee",
          "organization_name": "ARISTOPHARMA LTD."
        },
        {
          "start_date": "2021-01-01",
          "end_date": "2021-01-01",
          "role": "Workshop on 'Role of Faculty Members for Quality Teaching and Learning at Tertiary Level'",
          "organization_name": "R. P. Shaha University (RPSU)"
        },
        {
          "start_date": "2023-01-01",
          "end_date": "2023-03-31",
          "role": "R for Research Cohort 2",
          "organization_name": "Chiral Bangladesh"
        }
      ],
      "research_works": [
        {
          "title": "Elevated serum MDA and depleted non-enzymatic antioxidants, macro-minerals and trace elements are associated with bipolar disorder. date: January, 2017, journal: Journal of Trace Elements in Medicine and Biology, Elsevier, volume: 39, pages: 162-168, link: https://www.sciencedirect.com/science/article/abs/pii/S0946672X16303091"
        },
        {
          "title": "Glucosidase Inhibitory Effects of Some Popularly used Unani, Ayurvedic and Homeopathic medicines. date: December, 2018, journal: Asian Journal of Medical and Health Research (AJMHR), volume: 2, issue: 12, issn: 2455-8664, link: https://ajmhr.com/show_script.php?volume=2&issue=12&month=December"
        },
        {
          "title": "A Comparative Study of Serum Antioxidant (Vitamin C) Level in People with and without Type 2 Diabetes in Narayanganj, Bangladesh. date: December, 2023, journal: RPSU Research Journal, volume: II ,issue: I, issn: 29592305, https://www.journal.rpsu.ac.bd/images/Comparative_Study.pdf"
        },
        {
          "title": "Monkeypox Disease: An Updated Review. September, 2023, journal: Biomedical and Pharmacology Journal, volume: 16, issue: 3, pages: 1329-1341, https://biomedpharmajournal.org/vol16no3/monkeypox-disease-an-updated-review/"
        }
      ]
    },
    {
      "_id": "ObjectId12",
      "name": "Md Parvez",
      "designation": "Lecturer",
      "dept": "Fashion Designing",
      "image": "/md-parvez.jpg",
      "slug": "md-parvez",
      "email": "parveztfd@rpsu.edu.bd",
      "overview": null,
      "current_research_works": [],
      "research_interests": null,
      "education": [
        {
          "degree": "B.Sc (Hon's) in Fashion Designing",
          "university_name": "BGMEA University of Fashion & Technology (BUFT)",
          "location": "Bangladesh",
        }
      ],
      "work_experience": [],
      "research_works": []
    },
    {
      "_id": "ObjectId13",
      "name": "Israt Jahan Rime",
      "designation": "Lecturer",
      "dept": "Fashion Design & Apparel Engineering",
      "image": "/israt-jahan-rime.png",
      "slug": "israt-jahan-rime",
      "email": "isratisu02@gmail.com",
      "overview": null,
      "current_research_works": [],
      "research_interests": null,
      "education": [
        {
          "degree": "B.Sc. in Fashion Design & Apparel Engineering",
          "university_name": "National Institute of Textile Engineering & Research (NITER)",
          "location": "Affiliated with University of Dhaka",
          "duration": "N/A"
        }
      ],
      "work_experience": [],
      "research_works": []
    },
    {
      "_id": "ObjectId14",
      "name": "Anamika Datta",
      "designation": "Lecturer",
      "dept": "Pharmacy",
      "image": "/anamika-datta.png",
      "slug": "anamika-datta",
      "email": "anamika.phr@rpsu.edu.bd",
      "overview": null,
      "current_research_works": [],
      "research_interests": null,
      "education": [
        {
          "degree": "M.Pharm",
          "university_name": "Noakhali Science and Technology University",
          "location": "Noakhali, Bangladesh",
        },
        {
          "degree": "B.Pharm",
          "university_name": "Noakhali Science and Technology University",
          "location": "Noakhali, Bangladesh",
        },

      ],
      "work_experience": [
        {
          "start_date": "2020-01-01",
          "end_date": "2022-07-31",
          "role": "Thesis Fellow",
          "organization_name": "Noakhali Science and Technology University",
          "location": "Noakhali, Bangladesh",
        }
      ],
      "research_works": [
        {
          "title": "Association study of IL10 gene polymorphisms (rs1800872 and rs1800896) with cervical cancer in Bangladeshi women, year: 2020, link: https://pubmed.ncbi.nlm.nih.gov/33069925/"
        },
        {
          "title": "The prevalence of hepatitis B virus infection in Bangladesh: A systematic review and meta-analysis, year: 2021, link: https://pubmed.ncbi.nlm.nih.gov/35156592/"
        }
      ],
      "membership": []
    },
    {
      "_id": "ObjectId1",
      "name": "Dr. Kingkar Prosad Ghosh",
      "designation": "Dean & Associate Professor",
      "dept": "School of Engineering",
      "image": "/dr-kingkar-prosad-ghosh.jpg",
      "slug": "dr-kingkar-prosad-ghosh",
      "email": "kingkar@rpsu.edu.bd",
      "overview": null,
      "current_research_works": [],
      "research_interests": [
        "Computer-Aided Design (CAD)",
        "Cryptocurrency in Digital Economy",
        "Bangla Sign Language Recognition",
        "Bangladeshi Currency Classification"
      ],
      "education": [
        {
          "degree": "DSc",
          "university_name": "Volgograd State Technical University",
          "location": "Volgograd, Russia",
        },
        {
          "degree": "PhD",
          "university_name": "Volgograd State Technical University",
          "location": "Volgograd, Russia",
        },
        {
          "degree": "MSc",
          "university_name": "Volgograd State Technical University",
          "location": "Volgograd, Russia",
        },
        {
          "degree": "BSc",
          "university_name": "Volgograd State Technical University",
          "location": "Volgograd, Russia",
        }
      ],
      "work_experience": [
        {
          "start_date": "2024-09-01",
          "end_date": "Present",
          "role": "Associate Professor of CSE, Dean, School of Engineering, Additional Director",
          "organization_name": "RPSU",
          "location": "RPSU, Bangladesh",
        },
        {
          "start_date": "2021-01-01",
          "end_date": "2024-08-31",
          "role": "Associate Professor and Head of the Department",
          "organization_name": "RPSU",
          "location": "RPSU, Bangladesh",
        },
        {
          "start_date": "2020-04-01",
          "end_date": "2020-12-31",
          "role": "Assistant Professor and Head of the Department",
          "organization_name": "RPSU",
          "location": "RPSU, Bangladesh",
        },
        {
          "start_date": "2017-01-01",
          "end_date": "2020-03-31",
          "role": "Assistant Professor",
          "organization_name": "RPSU",
          "location": "RPSU, Bangladesh",
        },
        {
          "start_date": "2015-01-01",
          "end_date": "2017-12-31",
          "role": "Lecturer & Act. Chairman of the Department",
          "organization_name": "RPSU",
          "location": "RPSU, Bangladesh",
        },
        {
          "start_date": "2014-01-01",
          "end_date": "2017-12-31",
          "role": "Lecturer, Department of CSE",
          "organization_name": "RPSU",
          "location": "RPSU, Bangladesh",
        },
        {
          "start_date": "2011-01-01",
          "end_date": "2014-12-31",
          "role": "Researcher and Scientific Adviser",
          "organization_name": "Volgograd State Technical University",
          "location": "Volgograd, Russia",
        },
        {
          "start_date": "2009-01-01",
          "end_date": "2011-12-31",
          "role": "Junior Teacher & Researcher on the Department",
          "organization_name": "Volgograd State Technical University",
          "location": "Volgograd, Russia",
        },
        {
          "start_date": "2007-01-01",
          "end_date": "2009-12-31",
          "role": "Teaching Assistant",
          "organization_name": "Volgograd State Technical University",
          "location": "Volgograd, Russia",
        }
      ],
      "research_works": [
        {
          "title": "The Role of Cryptocurrency in Digital Economy: Applications, Challenges, and Solutions, year: 2024, link: https://example.com/cryptocurrency-study"
        },
        {
          "title": "Building an Effective CNN for Bangla Sign Language, year: 2024, link: https://example.com/bangla-sign-language"
        },
        {
          "title": "Classification of Bangladeshi Currency Using Convolutional Neural Network in Cross-Dataset Recognition Environment, year: 2024, link: https://example.com/currency-classification"
        },
        {
          "title": "Machine Learning Approaches for Classifying Online Job Advertisement, year: 2022, link: https://example.com/job-ad-classification"
        },
        {
          "title": "Investigate to find the common gene and design protein-protein interaction network for drug design among viral diseases: A bioinformatics approach, year: 2022, link: https://example.com/protein-interaction"
        },
        {
          "title": "Tanjina Akter, Arpita Roy, Kingkar Prosad Ghosh, A.H. M Shahariar Parvez.Investigate to find the common gene and design proteinprotein interaction network for drug design among viral diseases: A bioinformatics approach – RPSU Research Journal, V.01, No.01, 2022 ISSN: 2790-4903. [Hard journal]"
        },
        {
          "title": "Ghosh, K.P., Shcherbakov M.V. The decision support method for managing the systematization of the reorganization of the structures of social institutions in Bangladesh // Modern Science: Actual Problems of Theory and Practice. Series 'Natural and technical sciences.' - 2019. -- No. 3. - C. 63-68. http://www.nauteh-journal.ru/files/f27e5d9d-feb8-4a54-a0bf-8ecda965ab8f"
        },
        {
          "title": "Ghosh, K.P., Shcherbakov M.V. Model of the management process of changing the organizational structure of an existing institution in the process of reorganization of Bangladesh's social institutions // Modern Science: Actual Problems of Theory and Practice. Ser. Natural and technical sciences. - 2019. - No. 4. - C. 50-56. http://www.nauteh-journal.ru/files/3efb3001-54b0-459b-b532-1757facc1f4a"
        },
        {
          "title": "Ghosh, K. P., Scherbakov M. V. Model of the Management Process in the Reorganization of Structures of Social Institutes of the People's Republic of Bangladesh / K. P. Ghosh, M.V. Shcherbakov // Modeling, Optimization and Information Technology (Modeling, Optimization and Information Technology “MOIT”). - 2019 .-- T. 7, No. 2 (25). - C. 205-220. - URL: https://moit.vivt.ru/wp-content/uploads/2019/05/GhoshShcherbakov_2_19_1.pdf"
        },
        {
          "title": "Ghosh, K.P., Shcherbakov M.V. Decision support in managing the reorganization of social institutions of the Republic of Bangladesh // Bulletin of the Astrakhan State. technical university. Ser. Management, computer engineering and computer science. - 2019 .-- No. 2 (April). - C. 77-85. http://www.mathnet.ru/links/65eebe5ca9dc49026445423e3b7327b4/vagtu580.pdf"
        },
        {
          "title": "Ghosh, K.P., Khaleduzzaman Md. Stages and methods of decision making = Stages and methods of decision making / K.P. Ghosh, Md. Khaleduzzaman // School of Science. - 2018. - No. 9 (9) November. - C. 20-22. https://storage.shkolanauki.ru/source/publication_pdf/2018-13-11_17-54-50_Ghos_Kingkar_Prosad.pdf"
        },
        {
          "title": "Ghosh, K.P., Rahman Sajidur, A. Sumya, Al-M. Abdullah. System approach in the study of socioeconomic processes = System approach in the study of socio-economic processes / // School of Science. - 2018. - No. 10 (10) November. - C. 12-13. https://storage.shkolanauki.ru/source/publication_pdf/2018-27-11_16-05-17_Ghos_Kingkar_Prosad.pdf"
        },
        {
          "title": "Ghosh, K.P., Shcherbakov M.V. Methods of decision support for managing the process of reorganization of socio-economic institutions [Electronic resource] // Information and communication technologies: modern achievements: The Second International Youth Conference (Astrakhan, 11 -14 September 2018): materials. Section 'Scientific Instrument Making' / Astrakhan State. technical university - Astrakhan, 2018 .-- 1 electron. opt. disk (CD-ROM).http://www.astu.org/Content/Page/5833?fbclid=IwAR2QC0Xlt7xibnF9HvOg2GE0dY8WUl9SQ1I0dH226KtKKAwF0sz6omM3vs"
        },
        {
          "title": "Tamagowa M.A., Ghosh K.P. Methods for Evaluating the Effectiveness of Management Processes for the Commercialization of IT Innovations. Journal of Computer Science & Software Engineering, Vilnius, Lithuania, - Vol. 11, September, 2015, p. 96-102. [Hard journal]"
        },
        {
          "title": "Tamagowa M.A., Ghosh K.P., Thakur A.K. Software Risk Management Practice. The Journal of Systems and Software, Douala, Cameroon, - Vol. 43 (4), December, 2014, p. 56-61. [Hard journal]"
        },
        {
          "title": "Ghosh, K.P., Butenko L.N. Development Requirements to Software on the Basis of System Evolution Patterns // Communications in Control Science and Engineering (CCSE). - 2013 .-- Vol. 1, Issue 2 (Apri). - P. 12-16. http://journaldatabase.info/journal/issn2327-3038"
        },
        {
          "title": "Ghosh, K.P., Butenko L.N. Development of requirements for software based on the laws of systemogenesis // Fundamental Research. - 2012. - No. 3 (part 2). - C. 387-390. https://www.fundamental-research.ru/pdf/2012/3-2/33.pdf"
        },
        {
          "title": "Ghosh, K.P., Sharifuzzaman Md. Automation of engineering knowledge for design // Scientific reviewer. - 2011. - No. 1. - C. 59-61. [Hard journal]"
        }        

      ],
      "membership": []
    },
    {
      "_id": "ObjectId6",
      "name": "A. K. M. Manzurul Islam",
      "designation": "Assistant Professor",
      "dept": "English",
      "image": "/a-k-m-manzurul-islam.jpg",
      "slug": "a-k-m-manzurul-islam",
      "email": "manzurul_eng@rpsu.edu.bd",
      "overview": "A.K.M. Manzurul Islam is an experienced academic currently serving as an Assistant Professor at the Department of English, RP Shaha University (RPSU). With an M.A. in ELT and a B.A. (Hons.) in English from Rajshahi University, he has over a decade of teaching experience in ELT, linguistics, and literature. Previously, he held positions at European University of Bangladesh, The Millennium University, and Victoria University of Bangladesh. His research focuses on innovative ELT methodologies, with notable publications addressing culture-sensitive teaching and communicative grammar instruction. A dedicated educator and researcher, Manzurul Islam is committed to fostering academic excellence and preparing students for success in the global marketplace.",
      "current_research_works": null,
      "research_interests": null,
      "education": [
        {
          "degree": "M.A. in ELT",
          "major": "English",
          "university_name": "Rajshahi University",
          "location": "Rajshahi, Bangladesh",
        },
        {
          "degree": "B.A. (Hons)",
          "major": "English",
          "university_name": "Rajshahi University",
          "location": "Rajshahi, Bangladesh",
        },
        {
          "degree": "HSC",
          "major": "Science",
          "school_name": "Dhaka College",
          "location": "Dhaka, Bangladesh",
        },
        {
          "degree": "SSC",
          "major": "Science",
          "school_name": "Monipur High School",
          "location": "Dhaka, Bangladesh",
        }
      ],
      "work_experience": [
        {
          "start_date": "2018-01-21",
          "end_date": null,
          "role": "Senior Lecturer in English",
          "organization_name": "European University of Bangladesh",
          "location": "Dhaka, Bangladesh",
        },
        {
          "start_date": "2016-06-15",
          "end_date": "2017-09-13",
          "role": "Senior Lecturer in English",
          "organization_name": "The Millennium University",
          "location": "Dhaka, Bangladesh",
        },
        {
          "start_date": "2012-01-30",
          "end_date": "2016-06-11",
          "role": "Lecturer in English",
          "organization_name": "Victoria University of Bangladesh",
          "location": "Dhaka, Bangladesh",
        }
      ],

      "research_works": [
        {
          "title": "Culture Sensitive Methodology for ELT in Bangladesh, journal: Outlooks: VUB Studies in Language, Literature and Culture, volume: 2, issue: 2, pages: 192-204, year: 2014"
        },
        {
          "title": "Necessity for a Revolution in Teaching Communicative English Grammar to Bangladeshi Learners in CLT Classroom, journal: Journal of The Millennium University, volume: 1, issue: 1, pages: 48-55, year: 2014, http://www.themillenniumuniversity.edu.bd/journal/index.php/TMUJ/article/download/5/5/"
        }
      ],

    },
    {
      "_id": "ObjectId5",
      "name": "Abu Rayhan",
      "designation": "Research Assistant",
      "dept": "Electrical and Electronic Engineering",
      "image": "/abu-rayhan.jpg",
      "slug": "abu-rayhan",
      "email": "rayhan.eee.bsmrstu@gmail.com",
      "overview": "Abu Rayhan is a highly skilled Lecturer in the Department of Electrical and Electronic Engineering (EEE) at Bangabandhu Sheikh Mujibur Rahman Science and Technology University (BSMRSTU). With a B.Sc. in EEE, graduating as the first-ranked student, he combines technical expertise with innovative research contributions. As a Research Assistant, Abu Rayhan has played a key role in advanced projects, including AI-based bionic prosthetics, electric vehicles, and solar energy systems. His academic pursuits have led to several publications in renowned journals, addressing topics like perovskite solar cells and bioengineering. Proficient in engineering tools such as MATLAB, AutoCAD, and SCAPS-1D, alongside programming languages like C and C++, he brings technical versatility to his teaching and research. His leadership in **Bio-Brainiacs**, an AI-based bionic hand prosthetic initiative, underscores his commitment to impactful innovation.  Abu Rayhan’s dedication to advancing technology, coupled with his passion for teaching and research, makes him a valuable contributor to academia and the field of electrical engineering.",
      "current_research_works": [
       "Advancing CsSn0.25Ge0.75I3 Perovskite Solar Cells: Unleashing Peak Performance by Incorporating CesiumCarbonate-SnO2 Electron Transport Layer, Attaining an Impressive 28.2% Power Conversion Efficiency",
 "Low-Cost AI-Based Bionic Hand with a New Method of Getting a Sense of Touch",
 "Optimization and Performance Enhancement of Lead-Free CH3NH3SnBr3 Perovskite Solar Cells with Different Electron Transport Materials Using SCAPS-1D",
      ],
      "research_interests": [
        "Solar Cells",
        "AI-Based Bionic Hand",
        "Data Analysis"
      ],
      "education": [
        {
          "degree": "B.Sc. in Electrical and Electronic Engineering (EEE)",
          "university_name": "Bangabandhu Sheikh Mujibur Rahman Science & Technology University",
          "location": "Gopalganj, Bangladesh",
        },
      ],
      "work_experience": [
        {
          "role": "Research Assistant",
          "organization": "Bangabandhu Sheikh Mujibur Rahman Science & Technology University",
          "start_date": "2022-03-02",
          "end_date": "2024-04-01"
        },
        {
          "role": "Founder",
          "organization": "Bio-Brainiacs",
          "start_date": "2022-03-01",
          "end_date": "Present"
        }
      ],
      "research_works": [
        {
          "title": "Enhancing CsSn0.5Ge0.5I3 Perovskite Solar Cell Performance via Cu2O Hole Transport Layer Integration, International Journal of Photo-energy, doi.org/10.1155/2024/8859153"
        },
        {
          "title": "Analyzing the effect of adding a new Cu layer on defect density and efficiency of CdTe Solar Cells by numerical modeling approach in SCAPS-1D, International Journal of Photo-energy",
        },
      ]
    },
    {
      "_id": "ObjectId6",
      "name": "Dr. Apurba Kumar Barman",
      "designation": "Assistant Professor",
      "dept": "Institute of Biophysics, University of Chinese Academy of Sciences",
      "image": "/dr-apurba-kumar-barman.jpeg",
      "slug": "dr-apurba-kumar-barman",
      "email": "apurba@moon.ibp.ac.cn",
      "overview": "Dr. Apurba Kumar Barman is an accomplished **Assistant Professor in the Department of Pharmacy**, bringing a wealth of expertise in drug research, pharmacology, and therapeutic development. With a distinguished academic record, he earned his **Ph.D. from the University of Chinese Academy of Sciences**, where he conducted groundbreaking research on immune response modulation for cancer treatment. His academic journey also includes a Master of Pharmacy (M. Pharm.) and Bachelor of Pharmacy (B. Pharm.) from Khulna University, where he excelled in pharmacology and pharmaceutical sciences. Dr. Barman has extensive **research experience**, having contributed to innovative projects across reputed institutions in Bangladesh, China, and Croatia. His work focuses on **cancer immunotherapy, drug metabolism, and the pharmacological activities of natural compounds**. He has published numerous peer-reviewed articles in high-impact journals, addressing topics like radiation therapy, antioxidant studies, and the development of novel therapeutic approaches.  Dr. Barman possesses advanced technical skills in molecular biology, chromatographic techniques, spectroscopy, and cell culture, which he effectively integrates into his research and teaching methodologies. He has received prestigious **scholarships and fellowships**, including the UCAS Scholarship, CAS-TWAS President Fellowship, and Erasmus Mundus Action II, reflecting his academic excellence and dedication to research.  As an Assistant Professor, Dr. Barman is dedicated to fostering a collaborative learning environment, mentoring students, and contributing to advancements in pharmaceutical research, with a vision of improving global healthcare outcomes.  ",
      "education": [
        {
          "degree": "Ph.D.",
          "university_name": "Institute of Biophysics, University of Chinese Academy of Sciences"
        },
        {
          "degree": "Master of Pharmacy (M. Pharm.)",
          "university_name": "Khulna University, Bangladesh"
        },
        {
          "degree": "Bachelor of Pharmacy (B. Pharm.)",
          "university_name": "Khulna University, Bangladesh"
        }
      ],
    
    
      "research_works": [
        {
          "title": "Vaccination followed by radiation overcomes Treg induced radiation resistance, JCI, 125196-JCI-RG-1, 13.25"
        },
        {
          "title": "Pharmacological study of antioxidant, antibacterial, and cytotoxic activity of Ludwigia adscendens L. KU studies"
        },
        {
          "title": "Naringenin Ameliorates Radiation-Induced Lung Injury by Lowering IL-1β Level, journal: J Pharmacol Exp Ther, impact_factor: 3.885, 2018"
        },
        {
          "title": "Study of antioxidant potential, and quantification of major polyphenols in Leonurus sibiricus L. leaves using HPLC, Pharmacologyonlie"
        },
        {
          "title": "Phytochemical and Pharmacological Evaluation of Leaves of Averrhoa carambola Linn. Biosci Bioeng Commun"
        },
        {
          "title": "Pharmacological and Ethnomedicinal overview of Heritiera fomes: Future Prospects, International Scholarly Research Notices"
        }
      ]
    },
    {
      "_id": "ObjectId7",
      "name": "Md. Asaduzzaman",
      "designation": "Assistant Professor & PR Officer",
      "dept": "Mathematics",
      "image": "/md-asaduzzaman.jpg",
      "slug": "md-asaduzzaman",
      "email": "asaduzzaman@rpsu.edu.bd",
      "overview": "Md. Asaduzzaman is currently serving as an **Assistant Professor** and **Public Relations Officer** at **Royal Prime State University (RPSU)**. With a solid academic foundation, he holds an M.S. and B.Sc. (Hons.) in Mathematics from Mawlana Bhashani Science and Technology University (MBSTU), achieving notable distinctions during his studies. His expertise lies in **Differential Equations**, **Nonlinear Oscillations**, **Fluid Dynamics**, and **Population Dynamics**, with a strong interest in research and advanced numerical methods. He is proficient in computer applications, including Microsoft Office, programming languages (C, C++), and statistical tools like SPSS and SAS. A dedicated educator and communicator, Md. Asaduzzaman combines academic excellence with practical leadership skills, contributing effectively to teaching, research, and administrative responsibilities.",
      "education": [
        {
          "degree": "M.S. (Thesis Group) in Mathematics",
          "university_name": "Mawlana Bhashani Science & Technology University",
        },
        {
          "degree": "B.Sc. (Honors) inMathematics",
          "university_name": "Mawlana Bhashani Science & Technology University",
        }
      ],
      "work_experience": [
        {
          "role": "Assistant Professor & PR Officer",
          "organization_name": "RPSU",
          "location": "Tangail, Bangladesh",
        }
      ],
      "research_interests": [
        "Differential Equations",
        "Nonlinear Oscillations",
        "Population Dynamics",
        "Fluid Dynamics"
      ]
    },
    {
      "_id": "ObjectId4",
      "name": "Fahmina Akter",
      "designation": "Lecturer",
      "dept": "English",
      "image": "/fahmida-akter.jpeg",
      "slug": "fahmina-akter",
      "email": "smrity.fahminaakter@gmail.com",
      "overview": "Fahmina Akter is an experienced and committed educator, currently serving as an **Assistant Teacher in English** at Aloron International School & College, Dhaka, since October 2021. She specializes in preparing lesson plans, educating students at various levels, and managing academic progress through assignments, tests, and evaluations. She holds a Master of Arts in English (Applied Linguistics and ELT) and a **Bachelor of Arts in English** from **Jagannath University**, graduating with strong academic performance. Fahmina also has a solid science background, achieving exceptional results in both her HSC and SSC exams. Fahmina’s skills include **strong communication, time management, teamwork, and leadership abilities**, complemented by proficiency in **Microsoft Office tools** and **online communication**. She actively engages in extracurricular activities, such as organizing and managing clubs, public speaking, and fostering creative learning environments. Passionate about education, Fahmina aspires to inspire students to become impactful individuals and contribute positively to society.",
      "education": [
        {
          "degree": "Master of Arts (MA) in English (Applied Linguistics and ELT)",
          "university_name": "Jagannath University",
          "location": "Dhaka, Bangladesh",
        },
        {
          "degree": "Bachelor of Arts (BA) in English",
          "university_name": "Jagannath University",
          "location": "Dhaka, Bangladesh",
        }
      ],
      "work_experience": [
        {
          "start_date": "2021-10-01",
          "end_date": null,
          "role": "Assistant Teacher",
          "organization_name": "Aloron International School & College",
          "department": "English",
          "location": "Shah Ali Bag, Mirpur-1, Dhaka",
          "responsibilities": "Preparing lesson plans, educating students at all levels, assigning homework, grading tests, and documenting progress."
        }
      ]
    },
    {
      "_id": "ObjectId5",
      "name": "Faria Ferdous Cornalia",
      "designation": "Lecturer",
      "image": "/faria-ferdous-cornalia.jpg",
      "slug": "faria-ferdous-cornalia",
      "email": "fariaferdous05@gmail.com",
      "overview": "Faria Ferdous Cornalia is a dedicated academic professional currently serving as a **Lecturer at R. P. Shaha University**. With a strong foundation in Bengali Literature, she earned her **Master of Arts (MA)** and **Bachelor of Arts (Hons)** degrees from Eden Mahila College under the University of Dhaka. Faria brings a dynamic and extroverted approach to teaching, coupled with excellent **administrative and coordination skills**. She is committed to inspiring students to engage in constructive programs and achieve academic excellence. Her educational journey includes notable academic achievements in both **Humanities** and **Science**, with her H.S.C and S.S.C completed with commendable results. Faria is proficient in **Bengali** and **English**, excelling in communication, reading, writing, and understanding. In addition to her teaching expertise, Faria has strong **computer literacy**, with knowledge in MS Word, MS Excel, internet browsing, and email communication, further enhancing her teaching and organizational capabilities.",
      "education": [
        {
          "degree": "Master of Arts (MA) in Bengali Literature",
          "university_name": "Dhaka University",
          "location": "Dhaka, Bangladesh",
        },
        {
          "degree": "Bachelor of Arts (Hons) in Bengali Literature",
          "university_name": "Dhaka University",
          "location": "Dhaka, Bangladesh",
        }
      ],
    },
    {
      "_id": "ObjectId8",
      "name": "Dr. Gopal Chandra Saha",
      "designation": "Dean, School of Business",
      "dept": "Business Administration",
      "image": "/dr-gopal-chandra-saha.jpg",
      "slug": "dr-gopal-chandra-saha",
      "email": null,
      "overview": "Dr. Gopal Chandra Saha is a seasoned academician and administrator currently serving as the Dean of the School of Business at R. P. Shaha University (RPSU). With a distinguished career in academia, he has previously held the position of Head of the Department of Business Administration at The People’s University of Bangladesh. Dr. Saha holds a Ph.D. and M.Phil. in Management Information Systems from Islamic University, Kushtia, with research focused on telecommunication companies and Grameen Phone Ltd. in Bangladesh. His extensive teaching experience spans over a decade, covering diverse institutions including The People’s University of Bangladesh, Bangladesh University of Professionals (BUP), and Green University, among others. As an accomplished researcher, Dr. Saha has authored numerous publications on topics such as HR practices, financial performance, and technology adaptation in business, contributing to renowned journals. His expertise lies in areas like Strategic Management, Human Resource Management, Business Taxation, and Research Methodology. An active participant in institutional development, Dr. Saha has been a member of various academic committees and initiatives, reflecting his leadership and commitment to fostering academic excellence. His dedication to education, research, and institutional growth continues to shape the future of business studies at RPSU.",
      "research_interests": [
        "Management Information Systems",
        "Human Resource Management",
        "Financial Performance Evaluation",
        "Telecommunication Sector Analysis"
      ],
      "work_experience": [
        {
          "role": "Dean, School of Business",
          "organization_name": "RPSU",
          "location": "Dhaka, Bangladesh"
        },
        {
          "role": "Adjunct Faculty",
          "organization_name": "Bangladesh University of Professionals (BUP)",
          "location": "Dhaka, Bangladesh"
        },
        {
          "role": "Lecturer",
          "organization_name": "The People's University of Bangladesh",
          "location": "Dhaka, Bangladesh"
        },
        {
          "role": "Lecturer",
          "organization_name": "The Millennium University",
          "location": "Dhaka, Bangladesh"
        },
        {
          "role": "Adjunct Lecturer",
          "organization_name": "Green University",
          "location": "Dhaka, Bangladesh"
        },
        {
          "role": "Adjunct Lecturer",
          "organization_name": "Bangladesh University",
          "location": "Dhaka, Bangladesh"
        },
        {
          "role": "Adjunct Lecturer",
          "organization_name": "Atish Dipankar Science & Technology University",
          "location": "Dhaka, Bangladesh"
        }
      ],
    
      "education": [
        {
          "degree": "PhD in Management Information Systems",
          "university_name": "Islamic University, Kushtia, Bangladesh"
        },
        {
          "degree": "MPhil in Management Information Systems",
          "university_name": "Islamic University, Kushtia, Bangladesh"
        },
        {
          "degree": "MBA in Business Administration",
          "university_name": "University of Rajshahi"
        },
        {
          "degree": "BBA in Business Administration",
          "university_name": "University of Rajshahi"
        }
    
      ],
      "research_works": [
        {
          "title": "Human Resource Management, authors: Roy A., Saha G.C., Kazi S.H., publisher: Mohammad Publications, isbn: 978-97093-0-3"
        },
        {
          "title": "Performance Indicators of Specialized Commercial Banks (SCBs) In Bangladesh: An Evaluation, authors: Saha A., Uddin M.K., Saha G.C. journal: Journal of the Socio Economic Research & Development, JSERD, volume: 4, issue: 5, year: 2007, issn: 1813-0348"
        },
        {
          "title": "Financial Performance of Grameen Phone Ltd.: An Overview, authors: Hossain K.A., Sharma D., Saha G.C., journal: Journal of the Islamic University Studies (part-C), volume: 7, issue: 2, year: 2008"
        },
        {
          "title": "Performance Evaluation of Square Pharmaceuticals Limited, authors: Sarfaraz Nawaz A.S.M., Saha G.C., Maleque R. journal: Journal of the Islamic University Studies (part-C), volume: 7, issue: 1, year: 2007"
        }
      ]
      
    },
    {
      "_id": "ObjectId8",
      "name": "Md. Kawsar Ahmed",
      "designation": "Lecturer",
      "image": "/md-kawsar-ahmed.jpg",
      "slug": "md-kawsar-ahmed",
      "email": "kawsar_cse@rpsu.edu.bd",
      "overview": "Md. Kawsar Ahmed is a highly skilled and motivated Computer Science graduate with a **B.Sc. in Computer Science and Engineering** from Mawlana Bhashani Science and Technology University, where he achieved a CGPA of 3.55 and secured the 2nd merit position in his class. His research interests include Image Processing, Machine Learning, Artificial Intelligence, and Data Science, with ongoing research on Bangla Sign Language Processing. He has teaching experience as the Vice Principal of Dhamrai Engineering Institute and previously served as the Chief Instructor (Computer Technology) at the same institution. Md. Kawsar has strong programming skills in **C, C++, Java, Python**, and other tools, with hands-on experience in machine learning, deep learning, and image processing. His project work includes a Digital Examination System (C++) and a Result Management System(Java). He is fluent in both **Bangla** and **English** and aims to contribute to cutting-edge advancements in technology and education.  ",
    
      "current_research_works": ["Ongoing research on Bangla Sign Language Processing (Preparing to submit for publication)."],
      "research_interests": [
        "Image Processing and Computer Vision",
        "Data Science",
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning"
      ],
      "education": [
        {
          "degree": "Bachelor of Science (B.Sc.) in Computer Science and Engineering",
          "university_name": "Mawlana Bhashani Science and Technology University (MBSTU)",
          "location": "Tangail, Bangladesh"
        }
      ],
      "work_experience": [
        {
          "designation": "Vice-Principal",
          "organization_name": "Dhamrai Engineering Institute – 50656",
          "location": "Dhulivita, Dhamrai, Dhaka 1350",
          "start_date": "November 7, 2022",
          "end_date": "Present"
        },
        {
          "designation": "Chief Instructor (Computer Technology)",
          "organization_name": "Dhamrai Engineering Institute – 50656",
          "location": "Dhulivita, Dhamrai, Dhaka 1350",
          "start_date": "August 3, 2021",
          "end_date": "September 6, 2021"
        }
      ]
    },
    {
      "_id": "ObjectId6",
      "name": "Kazi Latifur Reza",
      "designation": "Associate Professor",
      "image": "/kazi-latifur-rahman.jpg",
      "slug": "kazi-latifur-reza",
      "email": "kazilatifur@rpsu.edu.bd",
      "overview": "Kazi Latifur Reza is an accomplished legal academic and practitioner with extensive experience in teaching, research, and professional legal practice. He is currently an **Assistant Professor** at The People’s University of Bangladesh, where he has been contributing since 2012, following his tenure at The Millennium University.  He holds an **LL.M. in Human Rights** from the University of East London, where he earned distinction for his critical analysis of genocide under the Geneva Conventions. He also completed his **LL.M. and LL.B. (Honors)** at the University of Dhaka. Kazi is a member of several prestigious professional societies, including the Dhaka Lawyer Association and the International Lawyer Association. Kazi's research interests span human rights, medical negligence, and Islamic banking, with multiple publications in renowned journals. He has also worked on projects under HEQEP and UGC in Bangladesh. Alongside teaching, he has significant professional experience as a legal assistant and advocate, including working with the Bangladesh Supreme Court.  He is adept in legal research tools like Westlaw and LexisNexis and proficient in MS Office applications. His dedication to education, law, and human rights is evident through his teaching, publications, and voluntary contributions as a director and editor for human rights initiatives.  ",
    
      "current_research_works": null,
      "research_interests": null,
      "education": [
        {
          "degree": "LL.M. in Human Rights",
          "university_name": "University of East London",
          "location": "London, UK"
        },
        {
          "degree": "LL.M. in Law",
          "university_name": "University of Dhaka",
          "location": "Dhaka, Bangladesh"
        },
        {
          "degree": "LL.B. (Honours) in Law",
          "university_name": "University of Dhaka",
          "location": "Dhaka, Bangladesh"
        }
      ],
      "work_experience": [
        {
          "designation": "Assistant Professor",
          "organization_name": "The People's University of Bangladesh",
          "location": "Asad Gate, Dhaka",
          "start_date": "November 2016",
          "end_date": "Present"
        },
        {
          "designation": "Lecturer",
          "organization_name": "The People's University of Bangladesh",
          "location": "Asad Gate, Dhaka",
          "start_date": "May 2012",
          "end_date": "November 2016"
        },
        {
          "designation": "Lecturer",
          "organization_name": "The Millennium University of Bangladesh",
          "location": "Momenbagh Road, Dhaka, Bangladesh",
          "start_date": "February 2011",
          "end_date": "May 2012"
        },
        {
          "designation": "Shift Manager",
          "organization_name": "Sainsbury's Ltd",
          "location": "London, UK",
          "start_date": "July 2008",
          "end_date": "December 2010"
        },
        {
          "designation": "Legal Assistant",
          "organization_name": "JKR International Legal Solutions Ltd",
          "location": "London, UK",
          "start_date": "2007",
          "end_date": "2010"
        },
        {
          "designation": "Advocate",
          "organization_name": "Bangladesh Supreme Court",
          "location": "Nazama Law House, Dhaka",
          "start_date": "2004",
          "end_date": "2007"
        },
        {
          "designation": "Junior Lawyer",
          "organization_name": "Dr. Kazi Reza-ul Huq",
          "location": "Dhaka",
          "start_date": "2003",
          "end_date": "2004"
        }
      ],
      "research_works": [
        {
          "title": "Genocide in Bangladesh: A Critical Examination of the Geneva Conventions of 1949, Dr. M. Siraj Sait University of East London"
        },
        {
          "title": "A Critical Assessment on Medical Negligence in Bangladesh: Responsibility of Doctors, Dr. Azizur Rahman Chowdhury, University of Dhaka"
        },
        {
          "title": "Financial Analysis with Legal Issues of Islamic Banks in Bangladesh, journal: Bangladesh Research Foundation Journal, year: 2017, volume: 6, issue: 1, 2224-8404"
        },
        {
          "title": "Medical Negligence: A Review of the Existing Legal System in Bangladesh, journal: Asian Academic Research Journal of Multidisciplinary, year: 2016, volume: 21, issue: 6, issn: 2319-2801"
        },
        {
          "title": "Criminal Defamation in Bangladesh: An Overview, journal: Bangladesh Research Foundation Journal, year: 2016, volume: 5, issue: 1, issn: 2224-8404"
        },
        {
          "title": "A Critical Review of the Forms and Criteria of Legal Reasoning in Different Types of Case, journal: Asian Academic Research Journal of Multidisciplinary, year: 2014, volume: 1, issue: 19, issn: 2319-2801"
        },
        {
          "title": "A Critical Appraisal on Flaws in Existing Legal Aid Law: Bangladesh Perspective, journal: IOSR Journal of Humanities and Social Science, year: 2014, volume: 19, issue: 12, issn: 2279-0837"
        }
      ]
    },
    {
      "_id": "ObjectId3",
      "name": "Mitali Rani Das",
      "designation": "Assistant Professor",
      "dept": null,
      "image": "/mitali-rani-das.jpeg",
      "slug": "mitali-rani-das",
      "email": "mitali@rpsu.edu.bd",
      "overview":"Mitali Rani Das is a seasoned legal professional with over 15 years of experience in the field of law. Currently serving as the Head of the Department of Law and Human Rights at RP Shaha University, she brings a wealth of knowledge and expertise to academia and legal practice. She began her legal career after completing her LL.B (Hons) and LL.M from the prestigious University of Dhaka, earning a First Class in her master's degree. She has been an enrolled lawyer with the Dhaka Bar Association since 2008 and the High Court Division of the Supreme Court of Bangladesh since 2015. Mitali has a robust professional background, having worked with Amir-Tanvir & Partners for over a decade. Her role involved diverse responsibilities such as client consultation, legal drafting, court hearings, and providing legal opinions. Her meticulous approach to legal research and case preparation has earned her a strong reputation in the field.  Her academic contributions are complemented by her practical experience, making her an invaluable mentor to students. She has also undergone specialized training, including the Bar Vocational Course and clinical education, which have further enriched her teaching and leadership abilities. Mitali Rani Das’s commitment to legal excellence and human rights continues to inspire her students and peers, positioning her as a leader in the academic and legal community.",
      "current_research_works": null,
      "research_interests": null,
      "education": [
        {
          "degree": "LL.M",
          "university_name": "University of Dhaka, Bangladesh",
          "location": "Dhaka, Bangladesh"
        },
        {
          "degree": "LL.B (Hons)",
          "university_name": "University of Dhaka, Bangladesh",
          "location": "Dhaka, Bangladesh"
        },
      ],
      "work_experience": [
        {
          "start_date": "2013-08-01",
          "end_date": null,
          "role": "Lawyer",
          "organization_name": "Amir-Tanvir & Partners",
          "location": "Dhaka, Bangladesh"}
      ],
      "research_works": null
    },
    {
      "_id": "ObjectId4",
      "name": "Marjana Alam",
      "designation": "Lecturer",
      "dept": "Pharmacy",
      "image": "/marjana-alam.jpg",
      "slug": "marjana-alam",
      "email": "marjana_phr@rpsu.edu.bd",
      "overview": "Marjana Alam is a dedicated and ambitious professional in the pharmaceutical industry, currently working as an Executive in Quality Operations at ACI Healthcare Limited. She combines strong academic credentials with practical experience to deliver high-quality performance in her field. Marjana holds a Master's degree in Pharmacy and a Bachelor's degree in Pharmacy from Jagannath University, achieving an impressive CGPA of 3.80 in her undergraduate studies. Her strong foundation in pharmacy is complemented by her excellent academic track record, including perfect CGPAs in both HSC and SSC from prestigious institutions like Ideal School and College and Latrabari PDB High School. Her professional development includes hands-on experience gained during a 15-day in-plant training at ACI Pharmaceuticals Ltd., where she developed technical insights into pharmaceutical operations. Marjana’s expertise includes quality assurance, process optimization, and compliance with regulatory standards, making her a key contributor to her organization. Marjana is recognized for her keen attention to detail, adaptability, and strong technical skills, including proficiency in MS Office and internet browsing for research and operational tasks. Her passion for continuous learning and commitment to excellence have positioned her as a valuable asset in the pharmaceutical sector.  In addition to her professional pursuits, Marjana values integrity and holds her Bangladeshi heritage close to her heart. Her dedication to achieving organizational goals while fostering personal growth makes her an outstanding professional in her field.",
      "research_interests": null,
      "education": [
        {
          "degree": "Masters of Pharmacy",
          "university_name": "Jagannath University",
          "department": "Pharmacy",
          "location": "Dhaka, Bangladesh",
        },
        {
          "degree": "Bachelor of Pharmacy (Four-year Hon's)",
          "university_name": "Jagannath University",
          "department": "Pharmacy",
          "location": "Dhaka, Bangladesh",
        },
      ],
      "work_experience": [
        {
          "start_date": null,
          "end_date": null,
          "role": "Executive, Quality Operation",
          "organization_name": "ACI Healthcare Limited",
          "location": "Dhaka, Bangladesh"
        }
      ],
      "research_works": null,
    
    },
    {
      "_id": "ObjectId9",
      "name": "Md. Mizanur Rahman",
      "designation": "Assistant Professor",
      "image": "/md-mizanur-rahman.jpg",
      "slug": "md-mizanur-rahman",
      "email": "mizanur@rpsu.edu.bd",
      "overview": "Md. Mizanur Rahman is a passionate computer science professional with an **M.S. in Computer Science and Engineering** from Jatiya Kabi Kazi Nazrul Islam University, where he achieved a CGPA of 3.65. His research focuses on **reversible microprocessors**, and he has published work in **reversible logic optimization** in international journals. Md. Mizanur is skilled in **programming (C, C++, Visual Basic, PHP)**, web development, and database management, with expertise in tools like **MySQL, HTML, and CSS**. He has experience in both **desktop and web application development** and a strong teaching interest in areas such as **programming, digital logic design, computer networking, and database systems**. He is a proactive learner, having participated in seminars on **data mining** and **artificial intelligence** and contributed to organizing IT fairs. Recognized for his responsibility, motivation, and analytical abilities, Md. Mizanur is eager to contribute to education, research, and development in the field of computer science.",
    
      "current_research_works": ["Reversible Microprocessor (Completed as part of M.S. research)."],
      "research_interests": [
        "Programming",
        "Computer Fundamentals",
        "Digital Logic Design",
        "Digital System Design",
        "Computer Networking",
        "Communication Engineering",
        "Internet and Web Programming",
        "Database Management System",
        "System Analysis Design and Development"
      ],
      "education": [
        {
          "degree": "M.S. in Computer Science and Engineering",
          "university_name": "Jatiya Kabi Kazi Nazrul Islam University",
          "location": "Trishal, Mymensingh, Bangladesh"
        },
        {
          "degree": "B.Sc. (Engg.) in Computer Science and Engineering",
          "university_name": "Jatiya Kabi Kazi Nazrul Islam University",
          "location": "Trishal, Mymensingh, Bangladesh"
        }
      ],
      "work_experience": [],
      "research_works": [
        {
          "title": "Reversible Microprocessor, Completed, Research conducted as part of M.S. work."
        },
        {
          "title": "An Optimized Design of Counter Using Reversible Logic, Md. Mizanur Rahman, Indrani Mandal, Md. Selim Al Mamun, International Journal of Advanced Research in Computer and Communication Engineering (IJARCCE), August 2015"
        }
      ]
    
    },
    {
      "_id": "ObjectId1",
      "name": "Muhammad Lutfur Rahman Abrar",
      "designation": "Lecturer and Coordinator",
      "dept": "EEE",
      "image": "/md-lutfur-rahman.png",
      "slug": "engr-md-lutfur-rahman",
      "email": "md.lutfurrahmanabrar@gmail.com",
      "overview": "Muhammad Lutfur Rahman Abrar is a dedicated Lecturer and Coordinator in the Department of Electrical and Electronic Engineering (EEE), bringing a blend of academic expertise and practical industry experience to his role. He holds both a Master’s and Bachelor’s degree in Electrical and Electronic Engineering from the American International University-Bangladesh (AIUB), with outstanding academic achievements, including a “Cum Laude” distinction. His professional journey includes serving as an Instructor at Montage Polytechnic Institute and as an Assistant Electrical Engineer at New Titas Rubber Factory, where he honed his skills in troubleshooting, maintenance, and the implementation of electrical systems. Muhammad has contributed to the field of EEE through multiple publications in reputable journals and international conferences, addressing topics like microgrid automation, rotor angle stability, and IoT-based smart systems. His ongoing research focuses on IoT-based smart garbage management systems and emergency distribution networks for crises like COVID-19. Adept at various software tools, including MATLAB, Proteus, and AutoCAD, and skilled in programming languages like C++ and C#, he ensures his students are well-equipped for the evolving demands of the engineering field. His teaching portfolio includes core EEE subjects such as Electrical Machines, Renewable Energy, and Switchgear Protection. Muhammad is an active member of prestigious organizations like the Institution of Engineers, Bangladesh (IEB) and the Institute of Electrical and Electronics Engineers (IEEE), reflecting his commitment to professional growth and contributions to the engineering community. With a passion for innovation, leadership, and student development, he continues to make a meaningful impact as an academician and coordinator in the EEE department.",
      "current_research_works": [
        "IoT Based Smart Garbage Management System",
        "Emergency Distribution Network System for COVID 19 Situation"
      ],
      "research_interests": [
        "Internet of Things (IoT)",
        "Power Sector",
        "Biomedical Engineering",
        "Power Plant"
      ],
      "education": [
        {
          "degree": "M.Sc. in Electrical and Electronic Engineering",
          "university_name": "American International University-Bangladesh (AIUB)",
          "location": "Dhaka, Bangladesh"
        },
        {
          "degree": "B.Sc. in Electrical & Electronic Engineering",
          "university_name": "American International University-Bangladesh (AIUB)",
          "location": "Dhaka, Bangladesh"
        }
      ],
      "work_experience": [
        {
          "start_date": "2020-02-01",
          "end_date": "2022-03-10",
          "role": "Instructor",
          "organization_name": "Montage Polytechnic Institute (MPI)",
          "location": "Tongi, Gazipur, Bangladesh"
        },
        {
          "start_date": "2018-01-01",
          "end_date": "2020-01-01",
          "role": "Assistant Electrical Engineer",
          "organization_name": "New Titas Rubber Factory",
          "location": "Matuail, Jatrabari, Dhaka, Bangladesh"
        }
      ],
      "research_works": [
        {
          "title": "Abu Hena Md Shatil and Md Lutfur Rahman, “Islanded Mode Microgrid Automation by Using Droop Control Method for Stranded Zone in Bangladesh”, SEUJEEE, vol. 2, no. 1, pp. 29-34, January 2022."
        },
        {
          "title": "M. L. Rahman and M. A. H. Shatil, “Modeling and Simulation of a Synchronous Generator with Rotor Angle Stability and Solve Inter Area Mode of Oscillation in Power System using Power System Stabilizer (PSS)”, AJSE, vol. 18, no. 1, pp. 35-43, May 2019."
        },
        {
          "title": "M. L. Rahman, M. A. H. Shatil, A. Ahsan, D. Ghosh, M. N. Haque and S. Sarker, \"Design and Implementation of Control System Lifeguard,\" 2021 International Conference on Science & Contemporary Technologies (ICSCT), 2021, pp. 1-5, (DOI: 10.1109/ICSCT53883.2021.9642590)."
        },
        {
          "title": "M. L. Rahman and M. A. H. Shatil, \"Design and Implementation of a Synchronous Generator with Rotor Angle Stability Control for Damping Interarea Oscillations of Interconnected Power Systems via PSS,\" 2021 International Conference on Information and Communication Technology for Sustainable Development (ICICT4SD), Dhaka, Bangladesh, 2021, pp. 331-335. (DOI: 10.1109/ICICT4SD50815.2021.9396810)."
        }
      ]
    },
    {
      "_id": "ObjectId2",
      "name": "Naznine Akter",
      "designation": "Assistant Professor",
      "dept": "Management Information Systems",
      "image": "/naznin-akter.jpg",
      "slug": "naznin-akter",
      "email": "nijumbbadu@gmail.com",
      "overview": "Naznine Akter is a dedicated **Lecturer in Business Administration**, specializing in **Management Information Systems (MIS)**. With an **MBA** and **BBA** from the University of Dhaka, she achieved stellar academic results. Her career includes an internship at **EXIM Bank Limited** and extensive teaching experience in various coaching centers.  Trained in Database Management Administration (DBA) from BUET, she is proficient in SQL, Oracle, and business tools like MS Office. Known for her organizational skills, calm demeanor under pressure, and passion for mentoring, Naznine is committed to fostering student success and contributing to institutional growth.",
      "current_research_works": [],
      "research_interests": null,
      "education": [
        {
          "degree": "MBA",
          "university_name": "University of Dhaka",
          "location": "Dhaka, Bangladesh"
        },
        {
          "degree": "BBA",
          "university_name": "University of Dhaka",
          "location": "Dhaka, Bangladesh"
        },
    
      ],
      "work_experience": [
        {
          "start_date": "2013-01-02",
          "end_date": "2013-02-16",
          "role": "Intern",
          "organization_name": "EXIM Bank Limited",
          "location": "Dhaka, Bangladesh",
        },
        {
          "start_date": "2010-01-01",
          "end_date": null,
          "role": "Lecturer",
          "organization_name": "Coaching Center",
          "location": "Narayanganj, Bangladesh",
        }
      ],
      "research_works": [],
    
    
    },
    {
      "_id": "ObjectId5",
      "name": "Niladry Paik",
      "designation": "Assistant Professor",
      "dept": "Law",
      "image": "/niladry-paik.jpg",
      "slug": "niladry-paik",
      "email": "niladrv@rpsu.edu.bd",
      "overview": "Niladry Paik is a highly motivated legal professional, researcher, and academic currently serving as an Assistant Professor at the Department of Law and Human Rights, RP Shaha University (RPSU). With a robust academic foundation and extensive experience in law, human rights, and legal research, he is dedicated to fostering legal education and advancing social justice initiatives. Niladry holds an LL.M. and LL.B. (Hons.) from the University of Dhaka, specializing in Comparative Family Law, Administrative Law, and International Law on Refugees and Stateless Persons. His academic journey reflects his passion for understanding and addressing complex legal and societal challenges. With nearly a decade of professional experience, Niladry has served as a Trainee Associate at Baul & Associates since 2014, excelling in drafting legal documents, including affidavits, contracts, and petitions. Additionally, he has contributed to impactful research projects with organizations like BLAST and BILS, focusing on workers' compensation laws, human rights, and safeguards against custodial violence. His commitment to continuous learning is evident from his participation in workshops and training programs on income tax laws, human rights, and advanced legal studies. As an accomplished mooter, he has represented his institution in prestigious competitions like the Henry Dunant Moot Court. Niladry is a founding member of the International Youth Council Bangladesh Chapter and has held leadership roles in various academic and extracurricular organizations, including the Dhaka University Moot Court Society.",
      "current_research_works": null,
      "research_interests": [
        "Comparative Law (Family Law, Constitutional Law, Legal Studies)",
        "Human Rights and Social Justice",
        "Labor and Employment Law",
        "Administrative Law",
        "Criminal Justice Reform",
        "International Law (Refugees, Migrants, Stateless Persons)"
      ],
      "education": [
        {
          "degree": "LL.M.",
          "university_name": "University of Dhaka",
          "location": "Dhaka, Bangladesh"
        },
        {
          "degree": "LL.B. (Hons.)",
          "university_name": "University of Dhaka",
          "location": "Dhaka, Bangladesh"
        }
      ],
      "work_experience": [
        {
          "start_date": "2014-01-01",
          "end_date": null,
          "role": "Trainee Associate",
          "organization_name": "Baul & Associates",
          "location": "Dhaka, Bangladesh"
        },
        {
          "start_date": "2015-01-01",
          "end_date": "2015-12-31",
          "role": "Researcher",
          "organization_name": "Bangladesh Institute of Labour Studies (BILS)",
          "location": "Dhaka, Bangladesh"
        },
        {
          "start_date": "2012-10-01",
          "end_date": "2013-04-30",
          "role": "Researcher",
          "organization_name": "Bangladesh Legal Aid Services and Trust (BLAST)",
          "location": "Dhaka, Bangladesh"
        }
      ],
      "research_works":[{"title":"Ensuring Right to Freedom from Torture and Arbitrary Police Action."}]
    },
    {
      "_id": "ObjectId20",
      "name": "Md. Nuruddin Pier Shihab",
      "image": "/md-nuruddin-pier-shihab.jpg",
      "designation": "Lecturer",
      "slug": "md-nuruddin-pier-shihab",
      "email": "nurpier5@gmail.com",
      "overview": "Md. Nuruddin Pier Shihab is an accomplished academic with a Master’s and Bachelor’s degree in English, both completed with distinction. He earned his Master's from BRAC University, where his thesis analyzed Benjamin Zephaniah's poetry, and his Bachelor's from Ranada Prasad Shaha University, focusing on W.B. Yeats as a modern poet. He has been a recipient of multiple merit-based scholarships, highlighting his dedication and academic excellence. With strong proficiency in tools like **Microsoft Word, Excel, PowerPoint**, and platforms for online teaching, he is well-equipped for modern educational environments. Fluent in both Bengali and English, Shihab’s career goal is to foster creativity and analytical thinking in students, moving beyond rote memorization. His extracurricular interests include poetry, and he has been recognized for his artistic talent, earning third place in an art competition celebrating the life of Sir Fazle Hasan Abed.",
      "current_research_works": ["Poetic protests for peace and modern poetic expressions."],
      "research_interests": [
        "Modern Poetry",
        "Peace Studies",
        "Creative Pedagogy",
        "English Literature"
      ],
      "education": [
        {
          "degree": "Master of Arts in English",
          "university_name": "BRAC University",
          "location": "Dhaka, Bangladesh"
        },
        {
          "degree": "Bachelor of Arts (Honours) in English",
          "university_name": "Ranada Prasad Shaha University",
          "location": "Narayanganj, Bangladesh"
        }
      ],
      "work_experience": [],
      "research_works": []
    },
    {
      "_id": "ObjectId3",
      "name": "Nusrat Jahan",
      "designation": "Lecturer",
      "dept": "Fashion Design & Apparel Engineering",
      "image": "/nusrat-jahan.jpg",
      "slug": "nusrat-jahan",
      "email": "jahannusrat.tex@gmail.com",
      "overview": "Nusrat Jahan, currently a Lecturer in the Department of Fashion and Design, combines academic excellence with a passion for innovation. She graduated with a B.Sc. in Fashion Design and Apparel Engineering (FDAE) from the National Institute of Textile Engineering and Research (NITER). Nusrat has extensive co-curricular achievements, including leadership roles in debate, career, and science clubs, and her research contributions focus on sustainable materials such as jute-based composites. She possesses strong technical skills in Photoshop, Adobe Illustrator, and Lectra Modaris, along with proficiency in MS Office. With her passion for teaching, critical thinking, and dedication to continuous learning, Nusrat inspires students and advances the field of fashion and design.",
      "current_research_works": [
        "Preparation and characterization of recycled RMG Cutting Waste and Jute fabric reinforced composite materials as an alternative to Cardboard, false ceiling (Work in process)",
        "Using Jute Fiber to make Composite Reinforced with PPC Trash to increase functionality of construction material (Brick) and Reducing Top Soil Usage"
      ],
      "research_interests": [
        "Sustainable construction materials",
        "Recycled composite materials",
        "Jute fiber applications in engineering"
      ],
      "education": [
        {
          "degree": "B.Sc. in Fashion Design & Apparel Engineering (FDAE)",
          "university_name": "National Institute of Textile Engineering and Research (NITER)",
          "location": "Dhaka, Bangladesh"
        },
        {
          "degree": "Higher Secondary Certificate (HSC)",
          "university_name": "Chandpur Govt Girls College",
          "location": "Chandpur, Bangladesh"
        }
      ],
      "work_experience": [
        {
          "start_date": "2023-01-01",
          "end_date": null,
          "role": "Lecturer",
          "organization_name": "Coaching Center",
          "location": "Chandpur, Bangladesh"
        },
        {
          "start_date": "2013-01-02",
          "end_date": "2013-02-16",
          "role": "Intern",
          "organization_name": "AUKO-TEX GROUP",
          "location": "Savar, Bangladesh"
        }
      ],
      "research_works": []
    },
    {
      "_id": "ObjectId3",
      "name": "Jannat Ara Piasa",
      "designation": "Lecturer",
      "dept": null,
      "image": "/jannat-ara-piasa.jpg",
      "slug": "jannat-ara-piasa",
      "email": "piasa71du@gmail.com",
      "overview": "Jannat Ara Piasa is a dedicated and ambitious legal professional with a Master of Laws (LLM) and Bachelor of Laws (LLB) from the **University of Dhaka**, graduating with distinction in both degrees. Her academic journey highlights a focus on **International Human Rights Law, Administrative Law, Civil Litigation**, and **Alternative Dispute Resolution**, culminating in a dissertation analyzing gender-based violence across legislative and judicial perspectives in South Asia. Jannat has demonstrated excellence throughout her education, earning scholarships at various levels for outstanding academic performance. She possesses strong **critical thinking, communication, leadership, and time management skills**, alongside proficiency in Microsoft Word, Excel, and PowerPoint.  With a passion for teaching, Jannat aims to contribute to academia by fostering quality education and inspiring students. Her interests include **traveling, writing, and reading**, reflecting her well-rounded personality and commitment to continuous learning.",
    
      "current_research_works": null,
      "research_interests": [
        "Gender-Based Violence",
        "International Human Rights Law",
        "Administrative Law",
        "Civil Litigation",
        "Alternative Dispute Resolution"
      ],
      "education": [
        {
          "degree": "Master of Laws (LLM)",
          "university_name": "University of Dhaka",
          "location": "Dhaka, Bangladesh"
        },
        {
          "degree": "Bachelor of Laws (LLB)",
          "university_name": "University of Dhaka",
          "location": "Dhaka, Bangladesh"
        }
      ],
      "work_experience": [],
      "research_works": []
    },
    {
      "_id": "ObjectId4",
      "name": "Sukanya Mandal",
      "designation": "Lecturer",
      "dept": "English",
      "image": "/sukanya-mandal.jpg",
      "slug": "sukanya-mandal",
      "email": "sukanya_eng@rpsu.edu.bd",
      "overview": "Sukanya Mandal is a dedicated Lecturer in the Department of English, specializing in Literature and Cultural Studies. She holds a **Master of Arts (M.A.)** and a **Bachelor of Arts (B.A.) Honours** in English from **Jagannath University**, graduating with commendable CGPAs of **3.63** and **3.57**, respectively.  With strong communication and presentation skills, Sukanya fosters an engaging learning environment, inspiring students to excel. Her background in classical music and cultural activities further enriches her teaching, making her adept at connecting literature with cultural contexts. Sukanya is committed to professional growth, student motivation, and contributing to academic excellence. ",
      "current_research_works": [],
      "research_interests": [],
      "education": [
        {
          "degree": "Master of Arts (M.A.)",
          "university_name": "Jagannath University"
        },
        {
          "degree": "Bachelor of Arts (B.A.) Honours",
          "university_name": "Jagannath University"
        }
      ],
      "work_experience": [],
      "research_works": []
    },
    {
      "_id": "ObjectId1",
      "name": "Dr. Sabyasachi Sarker",
      "designation": "Lecturer",
      "dept": "Business Administration",
      "image": "/drsabyasachi-sarker.png",
      "slug": "drsabyasachi-sarker",
      "email": "sabyasachisarker@outlook.com",
      "overview": "Dr. Sabyasachi Sarker is a dynamic professional specializing in **Supply Chain Management, Distribution Channel Management, Operations Management**, and **Corporate Marketing**, with a strong focus on the sustainability of supply chains in the livestock industry. He earned his **Ph.D. in Supply Chain Management** from Manav Rachna International Institute of Research and Studies, India, where he conducted an analytical study on government and private livestock farms in Bangladesh.  Dr. Sarker's career includes over three years of experience in **corporate sales, marketing, and HR administration**, working with renowned organizations like AG Agro Industries Ltd. and Triangle Consulting Firm. He has also contributed to academia through publications in **Scopus and Web of Science-indexed journals** on supply chain strategies and sustainability.  In addition to his academic and professional achievements, Dr. Sarker has participated in international conferences and completed internships with global organizations like Bharti Airtel Limited, further honing his expertise in **customer satisfaction and leadership-driven strategies**. His commitment to innovation and education makes him a valuable contributor to both industry and academia.",
      "current_research_works": null,
      "research_interests": [
        "Supply Chain Management",
        "Distribution Channel Management",
        "Operations Management",
        "International Business",
        "Digital Marketing",
        "Logistic Services",
        "Corporate Marketing",
        "Import/Export Marketing"
      ],
      "education": [
        {
          "degree": "Ph.D.",
          "university_name": "Manav Rachna International Institute of Research and Studies",
          "location": "India"
        },
        {
          "degree": "MBA",
          "university_name": "Manav Rachna International Institute of Research and Studies",
          "location": "India"
        },
        {
          "degree": "BBA",
          "university_name": "American International University-Bangladesh",
          "location": "Bangladesh"
        }
      ],
      "work_experience": [
        {
          "start_date": "2015-05-04",
          "end_date": "2016-08-20",
          "role": "Officer",
          "organization_name": "AG Agro Industries LTD. (Ahasan Group of Industries LTD.)"
        },
        {
          "start_date": "2013-06-01",
          "end_date": "2015-04-15",
          "role": "HRD Program Officer",
          "organization_name": "Triangle Consulting Firm"
        }
      ],
      "research_works": [
        {
          "title": "A Survey of Writing on The Sustainability of Supply Chain Management in The Bangladesh Livestock Industry, journal: Journal of Pharmaceutical Negative Results, issn_print: 0976-9234, issn_online: 2229-7723, volume: 13, issue: Special Issue 8, year: 2022, indexing: Scopus"
        },
        {
          "title": "A Review of Literature on The Sustainability of Supply Chain Management in The Bangladesh Livestock Industry, journal: Webology, issn: 1735-188x, volume: 19, issue: 3, year: 2022, indexing: Scopus"
        },
        {
          "title": "Effective Supply Chain Strategy Through the Customer Focused Leadership in Livestock Industry, journal: Turkish Journal of Physiotherapy and Rehabilitation, issn_print: 2651-4451, issn_online: 2651-446x, volume: 32, issue: 3, year: 2021, indexing: Web of Science"
        }
      ]
    },
    {
      "_id": "ObjectId9",
      "name": "Sabab Zaman",
      "designation": "Lecturer",
      "dept": "Electrical & Electronic Engineering",
      "image": "/sabab-zaman.jpg",
      "slug": "sabab-zaman",
      "email": "sababzaman_eee@rpsu.edu.bd",
      "overview": "Sabab Zaman is a dedicated academic professional serving as a Lecturer in the Department of Electrical & Electronic Engineering at R. P. Shaha University (RPSU). He holds a Bachelor of Science in Electrical & Electronic Engineering from Ahsanullah University of Science and Technology, where he demonstrated a strong academic foundation in engineering principles and applications. Alongside his role at RPSU, he has also gained valuable experience as a Part-Time Lecturer in the Department of Computer Science & Engineering at BGMEA University of Fashion and Technology (BUFT).",
      "education": [
        {
          "degree": "B.Sc. Engg. in Electrical & Electronic Engineering",
          "university_name": "Ahsanullah University of Science and Technology"
        }
      ],
      "work_experience": [
        {
          "role": "Lecturer (Part-Time)",
          "organization_name": "BGMEA University of Fashion and Technology",
          "location": "Dhaka, Bangladesh"
        }
      ]
    },
    {
      "_id": "ObjectId9",
      "name": "Engr. Rajib Mondal",
      "designation": "Assistant Professor",
      "dept": "Electrical & Electronic Engineering",
      "image": "/engr-rajib-mondal.jpg",
      "slug": "engr-rajib-mondal",
      "email": "sababzaman_eee@rpsu.edu.bd",
      "overview": "Mr. Rajib Mondal received a B.Sc. degree in Electrical and Electronic Engineering from American International University-Bangladesh (AIUB) in 2009 and M.Sc. Engineering in Electrical and Electronic Engineering (2018) from BRAC University (BRACU). He is currently serving as an Assistant Professor and Head of Electrical and Electronic Engineering department at R. P. Shaha University (RPSU). He started his teaching career as a Lecturer at the Electrical and Electronic Engineering Department of the University of World University of Bangladesh (WUB), Dhaka, Bangladesh in February 2011. His current research interest includes AI in cancer cell detection, machine learning, internet of things, power system stability, load frequency control, power system block chain management. The principal focus of his research is design and implementation. Now he is pursuing his PhD (remotely) in a leading university in India Techno India University Kolkata, WB, India. His PhD course work is completed and research work is in progress. Mr. Mondal is an active academic researcher, he has made significant contributions to the field of AI through the publication of scientific papers and essays in various books, journals, and conferences. He has also conducted, presented, and participated in lectures and workshops at different institutes and organizations, both domestically and internationally. In addition, he is the author and co-author of several IEEE, SPRINGER publications in peer-reviewed journals and conferences. He is the proud recipient of numerous awards and scholarships. His teaching activities include conducting EEE courses as well as supervision of senior undergraduate level research/capstone projects, research and development, curriculum design and development, managing faculty and undergraduate level students, student/faculty members counseling, class load distribution, industrial visit and training organize, seminar and project show organize, MoU with different Institute, Industries & foreign universities, departmental examination committee supervision, students unfair means, harassment and other policy maintain, teachers evaluation, budget preparation, laboratory development etc. Since May 2018 he has served in a number of academic administrative roles at R. P. Shaha University. He had industrial work experience as an assistant engineer in BBPS, Dhaka from August 2009 to January, 2011. Mr. Mondal has been serving in various universities and industries since August 2009. During 15+ years of academic and industrial career, he has been closely involved with various academic and research activities like Member of Academic Council RPSU, IQAC, PSAC, SA committee, OBE curriculum design, BAETE, BAC & IEB accreditation committee, IEEE WUB students branch, RPSU journal committee, convocation steering committee, convocation invitation committee, plant and infrastructure committeer, security law and order committee, EEE industrial tour and training committee WUB & RPSU, WUB flood relief committee, WUB saraswati puja organizing committee, Lab development and design, MoU with national and international universities/institute/industries, organize several Industrial attachment visits, training, seminar, workshop and published research papers in various international journals and conferences (81 citations) etc.",
      "education": [
      ],
      "work_experience": [
      ]
    },
    {
      "_id": "ObjectId9",
      "name": "Engr. Prajoy Podder",
      "designation": "Lecturer, Adjunct Faculty",
      "dept": "Electrical & Electronic Engineering",
      "image": "/engr-prajoy-podder.jpg",
      "slug": "engr-prajoy-podder",
      "email": "",
      "overview": "",
      "education": [
        {
          "degree": "B.Sc. Engg. in Electrical & Electronic Engineering",
          "university_name": "Khulna University of Engineering & Technology (KUET)",
          "location": "Khulna, Bangladesh"
        },
        {
          "degree": "M.Sc. Engg. in Electrical & Electronic Engineering",
          "university_name": "Bangladesh University of Engineering & Technology (KUET)",
          "location": "Dhaka, Bangladesh"
        }
      ],
      "work_experience": [
      ]
    },
    {
      "_id": "ObjectId9",
      "name": "Dr. Salena Akter",
      "designation": "Head & Associate Professor",
      "dept": "law",
      "image": "/dr-salena-akter.jpg",
      "slug": "dr-salena-akter",
      "email": "drsalenaa@gmail.com",
      "overview": "Dr. Salena Akter currently holds the position of Associate Professor in the Department of Law and Human Rights at R.P. Shaha University in Narayanganj, Bangladesh. She obtained her LL. B (Honours), LL.M, and Doctor of Philosophy (Ph.D.) from the University of Dhaka. Before joining RPSU, she worked as an Associate Professor and Chairperson of the Department of Law at Stamford University Bangladesh and also served as the Proctor of the same University. Additionally, she has been practicing as a lawyer (Advocate) at Bangladesh Supreme Court. Dr. Salena has authored four academic books, and her academic journals have received recognition both nationally and globally. Her academic interests focus mainly on Muslim Law and Hindu Law.",
      "education": [
        {
          "degree": "Ph.D. in Law",
          "university_name": "",
          "location": ""
        },
        {
          "degree": "LL.M.",
          "university_name": "University of Dhaka",
          "location": "Dhaka, Bangladesh"
        },
        {
          "degree": "LL.B. (Honours)",
          "university_name": "",
          "location": ""
        }
      ],
      "work_experience": [
      ]
    },
    {
      "_id": "ObjectId9",
      "name": "Dr. A.N.M. Arifiur Rahman",
      "designation": "Associate Professor",
      "dept": "law",
      "image": "/dr-anm-arifiur-rahman.jpg",
      "slug": "dr-anm-arifiur-rahman",
      "email": "arifurrahman_lhr@rpsu.edu.bd",
      "overview": "",
      "education": [
        {
          "degree": "Ph.D. in Law",
          "university_name": "",
          "location": ""
        },
        {
          "degree": "LL.M.",
          "university_name": "",
          "location": ""
        },
        {
          "degree": "LL.B. (Honours)",
          "university_name": "",
          "location": ""
        }
      ],
      "work_experience": [
      ]
    },
    {
      "_id": "ObjectId9",
      "name": "Nahid Islam Chowdhury",
      "designation": "Lecturer, Adjunct Faculty",
      "dept": "law",
      "image": "/nahid-islam-chowdhury.jpg",
      "slug": "nahid-islam-chowdhury",
      "email": "",
      "overview": "",
      "education": [
        {
          "degree": "LL.M.",
          "university_name": "",
          "location": ""
        },
        {
          "degree": "LL.B. (Honours)",
          "university_name": "",
          "location": ""
        }
      ],
      "work_experience": [
      ]
    },
    {
      "_id": "ObjectId10",
      "name": "Rafiqul Islam",
      "designation": "Lecturer",
      "dept": "English",
      "image": "/rafiqul-islam.jpg",
      "slug": "rafiqul-islam",
      "email": "rafiqul.eng@rpsu.edu.bd",
      "overview": "Rafiqul Islam is a dedicated Lecturer in the Department of English at R. P. Shaha University (RPSU). He holds a Master's degree in English Literature and Cultural Studies and a Bachelor's degree in English Language and Literature, both from Bangabandhu Sheikh Mujibur Rahman Science and Technology University (BSMRSTU), where he achieved first position in both programs. With a strong academic background in English literature, Rafiqul is passionate about teaching and inspiring students to appreciate the nuances of language and culture. He is committed to fostering a dynamic learning environment that encourages critical thinking, creativity, and effective communication skills.",
      "education": [
        {
          "degree": "Master of Arts (M.A.)",
          "major": "English Literature and Cultural Studies",
          "university_name": "Bangabandhu Sheikh Mujibur Rahman Science and Technology University (BSMRSTU)"
        },
        {
          "degree": "Bachelor of Arts (B.A.)",
          "major": "English Language and Literature",
          "university_name": "Bangabandhu Sheikh Mujibur Rahman Science and Technology University (BSMRSTU)"
        }
      ],
      "work_experience": [
        {
          "role": "Guest Lecturer in English",
          "organization_name": "Sheikh Hasina Govt. Girls High School and College",
          "location": "Gopalganj, Bangladesh"
        }
      ]
    },
    {
      "_id": "ObjectId9",
      "name": "Tanzil Hasnain Moin Roneet",
      "designation": "Head & Assistant Professor",
      "dept": "tfd",
      "image": "/tanzil-hasnain-moin-roneet.jpg",
      "slug": "tanzil-hasnain-moin-roneet",
      "email": "",
      "overview": "",
      "education": [
      ],
      "work_experience": [
      ]
    },
    {
      "_id": "ObjectId9",
      "name": "Dr.Pratima Dev",
      "designation": "Assistant Professor",
      "dept": "ged",
      "image": "/dr-pratima-dev.jpg",
      "slug": "dr-pratima-dev",
      "email": "",
      "overview": "",
      "education": [
      ],
      "work_experience": [
      ]
    },
    {
      "_id": "ObjectId11",
      "name": "Dr. Md. Nazmul Hasan",
      "designation": "Director, CRI & Professor",
      "dept": "School of Business",
      "image": "/md-nazmul-hasan.jpg",
      "slug": "md-nazmul-hasan",
      "email": "nazmul_bba@rpsu.edu.bd",
      "overview": "Dr. Md. Nazmul Hasan is the Director of the Centre for Research and Innovation (CRI) and a Professor at the School of Business, R. P. Shaha University (RPSU). His research interests include Fintech, AI-driven financial decision-making, blockchain in finance, and sentiment analysis in capital markets. Dr. Hasan brings extensive experience in academia and administration, having served in key roles such as Director of the Institutional Quality Assurance Cell (IQAC), Dean of the School of Business, and Head of the Department of Business Administration. His academic journey spans three continents, earning his Ph.D. from the University of Dhaka, an MBA from City University, USA, and a BBA from the University of Windsor, Canada.",
      "education": [
        {
          "degree": "Doctor of Philosophy (Ph.D.)",
          "major": "Management",
          "university_name": "University of Dhaka, Bangladesh"
        },
        {
          "degree": "Master of Business Administration (MBA)",
          "major": "Financial Management",
          "university_name": "City University, USA"
        },
        {
          "degree": "Bachelor of Business Administration (BBA)",
          "major": "Finance and Accounting",
          "university_name": "University of Windsor, Canada"
        }
      ],
      "research_interests": [
        "Fintech and Financial Inclusion",
        "AI-Driven Financial Decision-Making",
        "Blockchain in Finance",
        "Robo-Advisors and Wealth Management",
        "Sentiment Analysis in Capital Markets",
        "Cybersecurity in Fintech",
        "RegTech and Compliance"
      ],
      "work_experience": [
        {
          "start_date": "2024-11-01",
          "end_date": null,
          "role": "Director",
          "organization_name": "Centre for Research and Innovation (CRI)",
          "location": "R. P. Shaha University (RPSU)"
        },
        {
          "start_date": "2022-01-01",
          "end_date": null,
          "role": "Director",
          "organization_name": "Institutional Quality Assurance Cell (IQAC)",
          "location": "R. P. Shaha University (RPSU)"
        },
        {
          "start_date": "2024-04-01",
          "end_date": null,
          "role": "Professor",
          "organization_name": "School of Business",
          "location": "R. P. Shaha University (RPSU)"
        },
        {
          "start_date": "2022-01-01",
          "end_date": "2024-11-01",
          "role": "Dean",
          "organization_name": "School of Business",
          "location": "R. P. Shaha University (RPSU)"
        },
        {
          "start_date": "2019-01-01",
          "end_date": "2022-01-01",
          "role": "Head, Department of Business Administration",
          "organization_name": "School of Business",
          "location": "R. P. Shaha University (RPSU)"
        },
        {
          "start_date": "2018-09-01",
          "end_date": "2019-12-01",
          "role": "Director, MBA Program",
          "organization_name": "School of Business",
          "location": "R. P. Shaha University (RPSU)"
        },
        {
          "start_date": "2018-09-01",
          "end_date": "2024-04-01",
          "role": "Associate Professor",
          "organization_name": "School of Business",
          "location": "R. P. Shaha University (RPSU)"
        },
        {
          "start_date": "2016-04-01",
          "end_date": "2016-09-01",
          "role": "Dean",
          "organization_name": "School of Business",
          "location": "University of Information Technology and Sciences (UITS)"
        },
        {
          "start_date": "2014-11-01",
          "end_date": "2016-09-01",
          "role": "Head, Department of Business Studies",
          "organization_name": "School of Business",
          "location": "University of Information Technology and Sciences (UITS)"
        },
        {
          "start_date": "2014-03-01",
          "end_date": "2014-11-01",
          "role": "Program Coordinator of IMBA Program",
          "organization_name": "School of Business",
          "location": "University of Information Technology and Sciences (UITS)"
        },
        {
          "start_date": "2010-01-01",
          "end_date": "2016-01-01",
          "role": "Assistant Professor",
          "organization_name": "School of Business",
          "location": "University of Information Technology and Sciences (UITS)"
        },
        {
          "start_date": "2010-01-01",
          "end_date": "2014-03-01",
          "role": "Head of IMBA Program",
          "organization_name": "School of Business",
          "location": "University of Information Technology and Sciences (UITS)"
        },
        {
          "start_date": "2007-02-01",
          "end_date": "2009-12-01",
          "role": "Lecturer",
          "organization_name": "School of Business",
          "location": "University of Information Technology and Sciences (UITS)"
        },
        {
          "start_date": "2005-01-01",
          "end_date": "2006-09-01",
          "role": "Accountant",
          "organization_name": "Nectar",
          "location": "Toronto, Canada"
        },
        {
          "start_date": "2001-08-01",
          "end_date": "2004-09-01",
          "role": "Business Manager and Assistant Accountant",
          "organization_name": "Asia Pacific International",
          "location": "Toronto, Canada"
        }
      ],
      "research_works": [
        {
          "title": "THE ROLE OF FINANCIAL DERIVATIVES IN RECENT CAPITAL MARKET CONDITION IN BANGLADESH"
        },
        {
          "title": "TALENT MANAGEMENT: A STUDY ON HOW TO MANAGE EXECUTIVES"
        },
        {
          "title": "ASSESSING THE PERFORMANCE APPRAISAL IN THE ORGANIZATIONS"
        },
        {
          "title": "MICRO-CREDIT AND POVERTY ALLEVIATION: THE CASE OF BANGLADESH"
        },
        {
          "title": "ETHICAL ISSUES RELATED TO CONSUMERS"
        },
        {
          "title": "SOCIAL IMPACT OF ADVERTISEMENT IN BANGLADESH: A CASE STUDY OF DHAKA CITY"
        },
        {
          "title": "PROFITABILITY AND CREDIT RISK MANAGEMENT: A CASE STUDY OF COMMERCIAL BANKS IN BANGLADESH"
        },
        {
          "title": "FUNDAMENTALS KNOWLEDGE OF INVESTOR AND ITS INFLUENCE ON INVESTMENT IN CAPITAL MARKET"
        },
        {
          "title": "GOOD GOVERNANCE IN BANGLADESH: PROBLEMS AND PROSPECTS"
        },
        {
          "title": "MODEL FOR BUSINESS DEVELOPMENT: A CASE STUDY ON T-SHIRT BUSINESS"
        },
        {
          "title": "FACTORS AFFECTING EMPLOYEE TURNOVER AND SOUND RETENTION STRATEGIES IN BUSINESS ORGANIZATION: A CONCEPTUAL VIEW"
        },
        {
          "title": "COGNITIVE INTELLIGENCE AND SPIRITUAL MANAGEMENT FOR EFFECTIVE MANAGERIAL DECISION MAKING"
        },
        {
          "title": "RECENT STATUS AND CHALLENGES OF SMALL AND MEDIUM ENTERPRISES"
        },
        {
          "title": "CAMELS BASED ANALYSIS ON BANKING INDUSTRY IN BANGLADESH"
        },
        {
          "title": "FACTORS AFFECTING EMPLOYEE ENGAGEMENT: A STUDY ON PRIVATE ORGANIZATIONS IN BANGLADESH"
        },
        {
          "title": "DETERMINANTS OF ACADEMIC MAJOR CHOICE: A COMPARATIVE STUDY OF BUSINESS PROGRAMS IN BANGLADESH"
        },
        {
          "title": "HOMES AND LOANS: DECODING BANGLADESH'S HOUSING FINANCE SECTOR"
        }
      ]
    },



{
      "_id": "ObjectId3",
      "name": "Professor Dr. Sheikh Abdur Rahim",
      "designation": "Head & Professor",
      "dept": "Business Administration",
      "image": "/dr-sheikh-abdur-rahim.jpg",
      "slug": "dr-sheikh-abdur-rahim",
      "email": "seikhabdur_ba@rpsu.edu.bd",
      "overview":"I obtained the Doctor of Philosophy (Ph.D), Master of Business Administration (MBA), and Bachelor of Business Administration (BBA) Degree from the Department of Management, Faculty of Business Studies, University of Dhaka respectively in 2019, 2005, and 2003, and received awards and scholarships for excellent academic performance. I joined R. P. Shaha University in 2024 and I’m serving as the Professor and Head of the Department of Business Administration; Member of the Academic Council; Member of the Syndicate;  Member of the Selection & Promotion Board and Director of Kumudini Skills Development Institute to date.  Before joining R.P. Shaha University, I served Southeast University, Daffodil International University, Eastern University, Patuakhali Science and Technology University, Southeast University and Victoria University of Bangladesh as the Director of the Program, Head of the Department, Director of the Division, Member of the Syndicate, Member of the Academic Council, Additional Director of the IQAC, Head of the IQAC, Associate Editor of the Journal,  Professor, Associate Professor, Assistant Professor, Senior Lecturer, Lecturer, Departmental Representative etc. Currently, I am serving as the Editor/Reviewer of different renowned international journals.  Twenty research articles of mine have been published in different national and international high-quality indexed/peer- reviewed journals. In addition, eight international conference papers have also been published in the USA, UK, Thailand, and Nepal.",
      "current_research_works": null,
      "research_interests": null,
      "education": [
        {
          "degree": "PhD (HRM)",
          "university_name": "University of Dhaka, Bangladesh",
          "location": "Dhaka, Bangladesh"
        },
        {
          "degree": "MBA (HRM)",
          "university_name": "University of Dhaka, Bangladesh",
          "location": "Dhaka, Bangladesh"
        },
       {
          "degree": "BBA (MGT)",
          "university_name": "University of Dhaka, Bangladesh",
          "location": "Dhaka, Bangladesh"
        }, 
      ],
      "work_experience": null,

      "research_works": null
    },

    {"_id": "ObjectId4",
    "name": "Md. Yahin Hossain",
    "designation": "Assistant Professor",
    "dept": "Business Studies",
    "image": "/mdyahin-hossain.png",
    "slug": "mdyahin-hossain",
    "email": "yahin.hossain@uits.edu.bd",
    "overview": "To promote creativity and analytical abilities in students instead of rote memorization, fostering their professional development through engaging education. Dedicated to high-quality education and innovative teaching methodologies.",
    "current_research_works": null,
    "research_interests": [
      "Distance Education",
      "Management",
      "Strategic Human Resource Management",
      "Market Analysis"
    ],
    "education": [
      {
        "degree": "Ph.D. (Candidate)",
        "university_name": "Huazhong University of Science and Technology",
        "location": "Wuhan, China"
      },
      {
        "degree": "MBA (HRM)",
        "university_name": "University of Dhaka",
        "location": "Dhaka, Bangladesh"
      },
      {
        "degree": "BBA (Management)",
        "university_name": "University of Dhaka",
        "location": "Dhaka, Bangladesh"
      }
    ],
    "work_experience": [
      {
        "designation": "Assistant Professor and Head",
        "institution": "University of Information Technology and Sciences (UITS)",
        "location": "Baridhara, Dhaka",
        "start_date": "January 2020",
        "end_date": "Present",
        
      },
      {
        "designation": "Ph.D. Researcher",
        "institution": "Huazhong University of Science and Technology",
        "location": "Wuhan, China",
        "start_date": "August 2017",
        "end_date": "June 2022",
        
      },
      {
        "designation": "Lecturer",
        "institution": "University of Information Technology and Sciences (UITS)",
        "location": "Dhaka, Bangladesh",
        "start_date": "January 2010",
        "end_date": "December 2017",
        
      },
      {
        "designation": "Junior Auditor",
        "institution": "Rahman and Rahman Haq (RRH)",
        "location": "Bangladesh",
        "start_date": "August 2010",
        "end_date": "October 2010",
        
      }
    ],
    "research_works": [
      {
        "title": "Examining the relationship between self-actualization and job performance via taking charge, journal: International Journal of Research in Business and Social Science, year: 2020"
      },
      {
        "title": "Effect of perceived fear, quality, and self-determination on learners' retention intention on MOOCs, journal: Psychology Research and Behavior Management, year: 2022"
      },
      {
        "title": "HRM Practice in Commercial Banks: A case study of Bangladesh, journal: IOSR Journal of Business and Management, year: 2014"
      },
      {
        "title": "Effect of Perceived Fear, Quality, and Self-Determination on Learners' Retention Intention on MOOCs, journal: Psychology Research and Behavior Management, year: 2022"
      },
      {
        "title": "HRM Practice in Commercial Banks: A Case Study of Bangladesh, journal: IOSR Journal of Business and Management, year: 2014"
      }
    ]
    },



    // {
    //   "_id": "ObjectId5",
    //   "name": "Dr. A.N.M. Arifiur Rahman",
    //   "designation": "Associate Professor",
    //   "dept": "Business Administration",
    //   "image": null,
    //   "slug": "dr-a-n-m-arifiur-rahman",
    //   "email": "arifurrahman_lhr@rpsu.edu.bd",
    //   "overview": null,
    //   "current_research_works": null,
    //   "research_interests": null,
    //   "education": [
    //     {
    //       "degree": "PhD",
    //       "university_name": "University of Dhaka, Bangladesh",
    //       "location": "Dhaka, Bangladesh"
    //     },
    //     {
    //       "degree": "LLM",
    //       "university_name": "University of Dhaka, Bangladesh",
    //       "location": "Dhaka, Bangladesh"
    //     },
    //    {
    //       "degree": "LLB",
    //       "university_name": "University of Dhaka, Bangladesh",
    //       "location": "Dhaka, Bangladesh"
    //     }, 
    //   ],
    //   "work_experience": null,

    //   "research_works": null
    // },

    {"_id": "ObjectId5",
      "name": "Rafsan Jany",
      "designation": "Lecturer",
      "dept": "Business Administration",
      "image": "/rafsan-jany.jpg",
      "slug": "rafsan-jany",
      "email": "rafsan.sta@rpsu.edu.bd",
      "overview": null,
      "current_research_works": null,
      "research_interests": null,
      "education": [
        {
          "degree": "MS in Statistics",
          "university_name": "University of Dhaka, Bangladesh",
          "location": "Dhaka, Bangladesh"
        },
       {
          "degree": "BS (Hons.) in Statistics",
          "university_name": "University of Dhaka, Bangladesh",
          "location": "Dhaka, Bangladesh"
        }, 
      ],
      "work_experience": null,

      "research_works": null
    },

   { "_id": "ObjectId8",
      "name": "Muaj Ibne Sahid",
      "designation": "Assistant Professor",
      "dept": "Pharmacy",
      "image": "/muaj-ibne-sahid.jpg",
      "slug": "muaj-ibne-sahid",
      "email": "sahid_phr@rpsu.edu.bd",
      "overview":"Muaj Ibne Sahid did his Bachelor of Pharmacy and Master of Pharmacy from Jagannath University. He joined RPSU in June, 2018. Currently, he is working as an Assistant Professor in the Department of Pharmacy at RPSU. He has published five research articles in different peer reviewed journals. His research interests include phytomedicine, sports medicine, epidemiology and environmental health. He teaches pharmacognosy, pharmaceutical technology, and pharmaceutical engineering. Besides, he has participated in extracurricular activities. Currently he is working as a Treasurer at the RPSU Sports Club.",
      "current_research_works": null,
      "research_interests": null,
      "education": [
        {
          "degree": "M.Pharm",
          "university_name": "Jagannath University, Bangladesh",
          "location": "Dhaka, Bangladesh"
        },
       {
          "degree": "B.Pharm",
          "university_name": "Jagannath University, Bangladesh",
          "location": "Dhaka, Bangladesh"
        }, 
      ],
      "work_experience": null,

      "research_works": null
    }

    
    

    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    

    
    

    
    

    
    
    
    
    
    
    
    
  ];
  export default dataset;