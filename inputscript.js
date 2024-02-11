const coursesByCollege = {
    // College of Accountancy and Finance (CAF)
    CAF: [
        "Bachelor of Science in Accountancy (BSA)",
        "Bachelor of Science in Management Accounting (BSMA)",
        "Bachelor of Science in Business Administration Major in Financial Management (BSBAFM)",
    ],
    
    // College of Architecture, Design and the Built Environment (CADBE)
    CADBE: [
        "Bachelor of Science in Architecture (BS-ARCH)",
        "Bachelor of Science in Interior Design (BSID)",
        "Bachelor of Science in Environmental Planning (BSEP)",
    ],
    
    // College of Arts and Letters (CAL)
    CAL: [
        "Bachelor of Arts in English Language Studies (ABELS)",
        "Bachelor of Arts in Filipinology (ABF)",
        "Bachelor of Arts in Literary and Cultural Studies (ABLCS)",
        "Bachelor of Arts in Philosophy (AB-PHILO)",
        "Bachelor of Performing Arts major in Theater Arts (BPEA)",
    ],
    
    // College of Business Administration (CBA)
    CBA: [
        "Doctor in Business Administration (DBA)",
        "Master in Business Administration (MBA)",
        "Bachelor of Science in Business Administration major in Human Resource Management (BSBAHRM)",
        "Bachelor of Science in Business Administration major in Marketing Management (BSBA-MM)",
        "Bachelor of Science in Entrepreneurship (BSENTREP)",
        "Bachelor of Science in Office Administration (BSOA)",
    ],
    
    // College of Communication (COC)
    COC: [
        "Bachelor in Advertising and Public Relations (BADPR)",
        "Bachelor of Arts in Broadcasting (BA Broadcasting)",
        "Bachelor of Arts in Communication Research (BACR)",
        "Bachelor of Arts in Journalism (BAJ)",
    ],
    
    // College of Computer and Information Sciences (CCIS)
    CCIS: [
        "Bachelor of Science in Computer Science (BSCS)",
        "Bachelor of Science in Information Technology (BSIT)",
    ],
    
    // College of Education (COED)
    COED: [
        "Doctor of Philsophy in Education Management (PhDEM)",
        "Master of Arts in Education Management (MAEM)",
        "Master in Business Education (MBE)",
        "Master in Library and Information Science (MLIS)",
        "Master of Arts in English Language Teaching (MAELT)",
        "Master of Arts in Education major in Mathematics Education (MAEd-ME)",
        "Master of Arts in Physical Education and Sports (MAPES)",
        "Master of Arts in Education major in Teaching in the Challenged Areas (MAED-TCA)",
        "Post-Baccalaureate Diploma in Education (PBDE)",
        "Bachelor of Technology and Livelihood Education (BTLEd)",
        "Bachelor of Library and Information Science (BLIS)",
        "Bachelor of Secondary Education (BSEd)",
        "Bachelor of Elementary Education (BEEd)",
        "Bachelor of Early Childhood Education (BECEd)",
    ],
    
    // College of Engineering (CE)
    CE: [
        "Bachelor of Science in Civil Engineering (BSCE)",
        "Bachelor of Science in Computer Engineering (BSCpE)",
        "Bachelor of Science in Electrical Engineering (BSEE)",
        "Bachelor of Science in Electronics Engineering (BSECE)",
        "Bachelor of Science in Industrial Engineering (BSIE)",
        "Bachelor of Science in Mechanical Engineering (BSME)",
        "Bachelor of Science in Railway Engineering (BSRE)",
    ],
    
    // College of Human Kinetics (CHK)
    CHK: [
        "Bachelor of Physical Education (BPE)",
        "Bachelor of Science in Exercises and Sports (BSESS)",
    ],
    
    // College of Law (CL)
    CL: [
        "Juris Doctor (JD)",
    ],

    // College of Political Science and Public Administration (CPSPA)
    CPSPA: [
        "Doctor in Public Administration (DPA)",
        "Master in Public Administration (MPA)",
        "Bachelor of Public Administration (BPA)",
        "Bachelor of Arts in International Studies (BAIS)",
        "Bachelor of Arts in Political Economy (BAPE)",
        "Bachelor of Arts in Political Science (BAPS)",
    ],

    // College of Social Sciences and Development (CSSD)
    CSSD: [
        "Bachelor of Arts in History (BAH)",
        "Bachelor of Arts in Sociology (BAS)",
        "Bachelor of Science in Cooperatives (BSC)",
        "Bachelor of Science in Economics (BSE)",
        "Bachelor of Science in Psychology (BSPSY)",
    ],

    // College of Science (CS)
    CS: [
        "Bachelor of Science Food Technology (BSFT)",
        "Bachelor of Science in Applied Mathematics (BSAPMATH)",
        "Bachelor of Science in Biology (BSBIO)",
        "Bachelor of Science in Chemistry (BSCHEM)",
        "Bachelor of Science in Mathematics (BSMATH)",
        "Bachelor of Science in Nutrition and Dietetics (BSND)",
        "Bachelor of Science in Physics (BSPHY)",
        "Bachelor of Science in Statistics (BSSTAT)",
    ],

    // College of Tourism, Hospitality and Transportation Management (CTHTM)
    CTHTM: [
        "Bachelor of Science in Hospitality Management (BSHM)",
        "Bachelor of Science in Tourism Management (BSTM)",
        "Bachelor of Science in Transportation Management (BSTRM)",
    ],

    // Institute of Technology (ITech)
    ITech: [
        "Diploma in Civil Engineering Technology (DCvET)",
        "Diploma in Computer Engineering Technology (DCET)",
        "Diploma in Electrical Engineering Technology (DEET)",
        "Diploma in Electronics Engineering Technology (DECET)",
        "Diploma in Information Communication Technology (DICT)",
        "Diploma in Mechanical Engineering Technology (DMET)",
        "Diploma in Office Management Technology (DOMT)",
        "Diploma in Railway Engineering Technology (DRET)",
    ],
};

function updateCourses() {
    const collegeSelect = document.getElementById('Colleges');
    const courseSelect = document.getElementById('Course');
    const selectedCollege = collegeSelect.value;

    // Remove existing options
    courseSelect.innerHTML = '';

    // Add new options based on selected college
    coursesByCollege[selectedCollege].forEach(course => {
        const option = document.createElement('option');
        option.value = course;
        option.text = course;
        courseSelect.add(option);
    });
}