export const config = {
  project: {
    name: "LearnHub",
    slogan: "📢 LearnHub: Navigating Education, Empowering Futures!",
    description:
      "Welcome to LearnHub, where innovation meets education! Our cutting-edge school management app is designed to seamlessly connect students, teachers, and parents in a collaborative learning ecosystem. With LearnHub, stay effortlessly organized with intuitive features for attendance tracking, grade management, and communication tools. ",
  },
  api: {
    baseUrl: "https://mycampusmates.com/app",
  },
  educationTerms: [
    { label: "Fall", key: "FALL_SEMESTER" },
    { label: "Spring", key: "SPRING_SEMESTER" },
  ],
  contact: {
    email: "pM5yT@example.com",
    phone: "+1 (555) 555-5555",
    mapEmbedURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.8873456547058!2d-73.84174691242767!3d40.918215897525826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28d4c22c2d3af%3A0xa29b5502dad390b3!2s16%20Chester%20St%20Apartment%201%2C%20Mt%20Vernon%2C%20NY%2010552%2C%20USA!5e0!3m2!1sen!2sbe!4v1699045877412!5m2!1sen!2sbe",

    address: "123 Main St, Anytown USA",
    hours: "Mon - Fri: 9am - 5pm",
    socialmedia: {
      facebook: "https://www.facebook.com/",
      twitter: "https://www.twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    pageRoles: {
      dashboard: ["ADMIN", "MANAGER", "ASSISTANTMANAGER", "TEACHER", "STUDENT"],
      adminManagement: ["ADMIN"],
      managerManagement: ["ADMIN"],
      assistantManagerManagement: ["ADMIN", "MANAGER"],
      teacherManagement: ["ADMIN", "ASSISTANTMANAGER"],
      lessonManagement: ["ADMIN", "ASSISTANTMANAGER"],
      studentManagement: ["ADMIN", "ASSISTANTMANAGER"],
      studentInfoManagement: ["TEACHER"],
      meetManagement: ["TEACHER"],
      contactMessages: ["ADMIN", "MANAGER", "ASSISTANTMANAGER"],
      chooseLesson: ["STUDENT"],
      gradesAndMeets: ["STUDENT"],
    },
    
    days: [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY",
    ],

  },
};
