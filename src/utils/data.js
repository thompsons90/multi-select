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

const movies = [
    { id: 1, title: "The Shawshank Redemption", year: 1994 },
    { id: 2, title: "The Godfather", year: 1972 },
    { id: 3, title: "The Godfather: Part II", year: 1974 },
    { id: 4, title: "The Dark Knight", year: 2008 },
    { id: 5, title: "12 Angry Men", year: 1957 },
    { id: 6, title: "Schindler's List", year: 1993 },
    { id: 7, title: "Pulp Fiction", year: 1994 },
    {
      id: 8,
      title: "The Lord of the Rings: The Return of the King",
      year: 2003
    },
    {
      id: 9,
      title: "The Good, the Bad and the Ugly",
      year: 1966
    },
    { id: 10, title: "Fight Club", year: 1999 },
    {
      id: 11,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001
    },
    {
      id: 12,
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
      checked: false
    },
    { id: 13, title: "Forrest Gump", year: 1994, checked: false },
    { id: 14, title: "Inception", year: 2010, checked: false },
    {
      id: 15,
      title: "The Lord of the Rings: The Two Towers",
      year: 2002
    },
    {
      id: 16,
      title: "One Flew Over the Cuckoo's Nest",
      year: 1975
    },
    { id: 17, title: "Goodfellas", year: 1990 },
    { id: 18, title: "The Matrix", year: 1999 },
    { id: 19, title: "Seven Samurai", year: 1954 },
    {
      id: 20,
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977
    },
    { id: 21, title: "City of God", year: 2002 },
    { id: 22, title: "Se7en", year: 1995 },
    { id: 23, title: "The Silence of the Lambs", year: 1991 },
    { id: 24, title: "It's a Wonderful Life", year: 1946 },
    { id: 25, title: "Life Is Beautiful", year: 1997 },
    { id: 26, title: "The Usual Suspects", year: 1995 },
    { id: 27, title: "Léon: The Professional", year: 1994 },
    { id: 28, title: "Spirited Away", year: 2001 },
    { id: 29, title: "Saving Private Ryan", year: 1998 },
    { id: 30, title: "Once Upon a Time in the West", year: 1968 },
    { id: 31, title: "American History X", year: 1998 },
    { id: 32, title: "Interstellar", year: 2014 }
  ];

export { movies, options1, options2 };