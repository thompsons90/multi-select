const options1 = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder"
  ];

  
  const options2 = [
    { 
      project: 'Banking App',
      employees: [
          {
              empId: 10,
              performanceScore: 87,
              name: 'Dave Schlansky',
              designation: 'Frontend Developer',
              imageSrc: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=592&q=80',
          },
          {
              empId: 11,
              performanceScore: 91,
              name: 'Brenda Zika',
              designation: 'UX Designer',
              imageSrc: 'https://images.unsplash.com/photo-1594185230805-68f37369b450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=646&q=80',
          },
          {
              empId: 12,
              performanceScore: 72,
              name: 'Eric Jhonson',
              designation: 'Project Manager',
              imageSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          }
      ],
      id: 1,
      primaryColor: '#0050B8',
      secondaryColor: '#D0E5FF',
  }, {
      project: 'GE Healthcare',
      employees: [
          {
              empId: 13,
              performanceScore: 65,
              name: 'Becky Garth',
              designation: 'Manager',
              imageSrc: 'https://images.unsplash.com/photo-1573600073955-f15b3b6caab7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80'
          },
          {
              empId: 14,
              performanceScore: 83,
              name: 'Patrick Raymond',
              designation: 'Backend Engineer',
              imageSrc: 'https://images.unsplash.com/photo-1616149477078-d36f7e9f1da9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          }
      ],
      id: 2,
      primaryColor: '#2dc653',
      secondaryColor: '#C1F1CD',
  }, {
      project: 'Hudson Finance',
      employees: [
          {
              empId: 15,
              performanceScore: 77,
              name: 'Miranda Shaffer',
              designation: 'Lead Developer',
              imageSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          },
          {
              empId: 16,
              performanceScore: 64,
              name: 'Nicole Harriet',
              designation: 'Product Designer',
              imageSrc: 'https://images.unsplash.com/photo-1609107081279-95316710f9fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
          },
          {
              empId: 17,
              performanceScore: 52,
              name: 'Gordon Mendoza',
              designation: 'Consultant',
              imageSrc: 'https://images.unsplash.com/photo-1603384699007-50799748fc45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          },
          {
              empId: 18,
              performanceScore: 66,
              name: 'Elliot Watkins',
              designation: 'Content Support',
              imageSrc: 'https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
          }
      ],
      id: 3,
      primaryColor: '#fdc500',
      secondaryColor: '#FFF3C8',
  }, {
      project: 'GE Sales',
      employees: [
          {
              empId: 19,
              performanceScore: 78,
              name: 'Stuart Crane',
              designation: 'Quality Assurance',
              imageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
          }
      ],
      id: 4,
      primaryColor: '#bd7ba8',
      secondaryColor: '#ECD9E6',
  }  
];  


export { options1, options2 };