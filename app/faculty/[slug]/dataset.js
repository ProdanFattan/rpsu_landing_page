

const dataset = [
    {
      _id: "ObjectId1",
      name: "Trina Saha",
      designation: "Assistant Professor",
      dept:"cse",
      image: null,
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
      image: "/rabeya.webp",
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
      image: null,
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
      image: null,
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
      image: "/kanika.webp",
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
      image: "/hrithik.webp",
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
    {
      _id: "ObjectId5",
      name: "Nur A-Ariya Alam",
      designation: "Lecturer",
      dept:"law",
      image: "/ariya.webp",
      slug: "nur-a-ariya-alam",
      email: "ariyaalam01@gmail.com",
      overview: "something will be here",
      current_research_works: null,
      research_interests: [],
      education: [
        {
          degree: "Master of Laws (LL.M.)",
          university_name: "East West University",
          location: "Dhaka (Bangladesh)",
        },
        {
          degree: "Bachelor of Laws (LL.B.)",
          university_name: "East West University",
          location: "Dhaka (Bangladesh)",
        }
      ],
      work_experience: [
        {
          start_date: "2024-01-01",
          end_date: null,
          role: "Intern",
          organization_name: "Attorney Raju Mahajan and Associates",
          location: "Bangladesh",
          website_link: null
        },
        {
          start_date: "2023-10-01",
          end_date: "2023-12-31",
          role: "Graduate Teaching Assistant (GTA)",
          organization_name: "Department of Law, East West University",
          location: "Dhaka (Bangladesh)",
          website_link: null
        },
        {
          start_date: "2023-09-01",
          end_date: "2022-10-31",
          role: "Intern",
          organization_name: "AGISS Research Institute",
          location: "Noida (Uttar Pradesh, India)",
          website_link: null
        },
        {
          start_date: "2022-03-01",
          end_date: "2023-07-31",
          role: "Research Assistant (RA)",
          organization_name: "Cyber Crime Awareness Foundation Bangladesh",
          location: "Bangladesh",
          website_link: null
        },
        {
          start_date: "2021-03-01",
          end_date: "2023-01-31",
          role: "Undergraduate Teaching Assistant (UTA)",
          organization_name: "Department of Social Relations and Department of Law, East West University",
          location: "Dhaka (Bangladesh)",
          website_link: null
        }
      ],
      research_works: [
        {
          title: "Nur-A Ariya Alam. Public Figures’ Privacy in the Contemporary Era: An Analysis From the Perspective of Right to Privacy and Freedom of Expression in Bangladesh, 2023 International Journal of Advanced Legal Research, Volume IV Issue I, https://ijalr.in/volume-4-issue-1/public-figures-privacy-in-the-contemporary-era-an-analysis-from-the-perspective-of-"
        },
        {
          title: "Nur-A Ariya Alam, A Critical Analysis of the Influence of Comparative Constitutional Law on the Constitutional Cases in Bangladesh, 2024 International Journal of Law and Policy Review, Volume 13 Issue I, https://drive.google.com/file/d/11mdgdwaqF2Za9IZC0JE4ztzmbap3VAIw/view"
        }
      ]
    },
    {
      _id: "ObjectId6",
      name: "Afroza Akter",
      designation: "Lecturer",
      dept:"pharmacy",
      image: "/afroza.webp",
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
      image: "/anisur.webp",
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
      image: "/anupam.webp",
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
      image: "/ankan.webp",
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
    // }

    
    
    
    
    
    
    
    
  ];
  export default dataset;