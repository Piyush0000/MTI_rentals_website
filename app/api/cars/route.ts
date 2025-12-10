import { NextResponse } from 'next/server';

// Mock car data
const mockCars = [
  {
    id: 1,
    name: 'Toyota Camry',
    price: 45,
    type: 'Sedan',
    image: '/car1.jpg'
  },
  {
    id: 2,
    name: 'Honda CR-V',
    price: 55,
    type: 'SUV',
    image: '/car2.jpg'
  },
  {
    id: 3,
    name: 'Ford Mustang',
    price: 75,
    type: 'Sports Car',
    image: '/car3.jpg'
  },
  {
    id: 4,
    name: 'Tesla Model 3',
    price: 85,
    type: 'Electric',
    image: '/car4.jpg'
  },
  {
    id: 5,
    name: 'BMW X5',
    price: 95,
    type: 'Luxury SUV',
    image: '/car5.jpg'
  },
  {
    id: 6,
    name: 'Mercedes-Benz C-Class',
    price: 80,
    type: 'Luxury Sedan',
    image: '/car6.jpg'
  }
];

// Mock locations data
const mockLocations = [
  { id: 1, name: 'Delhi', state: 'Delhi' },
  { id: 2, name: 'Mumbai', state: 'Maharashtra' },
  { id: 3, name: 'Bangalore', state: 'Karnataka' },
  { id: 4, name: 'Chennai', state: 'Tamil Nadu' },
  { id: 5, name: 'Kolkata', state: 'West Bengal' },
  { id: 6, name: 'Hyderabad', state: 'Telangana' },
  { id: 7, name: 'Pune', state: 'Maharashtra' },
  { id: 8, name: 'Ahmedabad', state: 'Gujarat' }
];

// Mock tour packages data
const mockPackages = [
  {
    id: 1,
    title: 'Delhi to Mathura Vrindavan Same Day Tour',
    duration: '1 Day',
    price: 4500,
    description: 'Visit the holy cities of Mathura and Vrindavan in a single day'
  },
  {
    id: 2,
    title: 'Delhi-Agra One Day Tour',
    duration: '1 Day',
    price: 3800,
    description: 'Experience the beauty of the Taj Mahal in one unforgettable day'
  },
  {
    id: 3,
    title: 'Golden Triangle Tour 5N6D',
    duration: '6 Days',
    price: 18500,
    description: 'Explore Delhi, Agra, and Jaipur in this classic Indian circuit'
  },
  {
    id: 4,
    title: 'Delhi to Haridwar Same Day Trip',
    duration: '1 Day',
    price: 5200,
    description: 'Experience the spiritual energy of Haridwar in one day'
  },
  {
    id: 5,
    title: 'Delhi to Manali Tour Package 3N4D',
    duration: '4 Days',
    price: 12800,
    description: 'Enjoy the scenic beauty of Himachal Pradesh'
  },
  {
    id: 6,
    title: 'Chardham Yatra',
    duration: '8 Days',
    price: 28500,
    description: 'Sacred pilgrimage to the four holy shrines of Uttarakhand'
  }
];

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Excellent service! The driver was punctual and very courteous. Highly recommended!',
    date: '2023-06-15',
    trip: 'Delhi to Agra Tour'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    rating: 4,
    comment: 'Good experience overall. The car was clean and comfortable.',
    date: '2023-06-10',
    trip: 'Airport Transfer'
  },
  {
    id: 3,
    name: 'Amit Patel',
    rating: 5,
    comment: 'Outstanding service for our family vacation. Will definitely use again!',
    date: '2023-06-05',
    trip: 'Manali Tour Package'
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint') || 'cars';
  
  switch (endpoint) {
    case 'cars':
      return NextResponse.json(mockCars);
    case 'locations':
      return NextResponse.json(mockLocations);
    case 'packages':
      return NextResponse.json(mockPackages);
    case 'reviews':
      return NextResponse.json(mockReviews);
    default:
      return NextResponse.json(mockCars);
  }
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint') || 'bookings';
  
  const body = await request.json();
  
  switch (endpoint) {
    case 'bookings':
      // In a real application, you would save the booking to a database
      console.log('Booking request:', body);
      
      // Return a success response
      return NextResponse.json({ 
        message: 'Booking request received', 
        bookingId: Math.floor(Math.random() * 1000000),
        status: 'confirmed'
      });
    case 'reviews':
      // In a real application, you would save the review to a database
      console.log('Review submission:', body);
      
      // Return a success response
      return NextResponse.json({ 
        message: 'Review submitted successfully',
        reviewId: Math.floor(Math.random() * 1000000)
      });
    default:
      return NextResponse.json({ 
        message: 'Endpoint not found' 
      }, { status: 404 });
  }
}