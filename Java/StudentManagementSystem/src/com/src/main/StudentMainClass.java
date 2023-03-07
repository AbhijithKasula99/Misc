package com.src.main;

// As Student is not in this package so import the package wherever the Student is
import com.src.model.Student; 
import java.util.Scanner; // This is predefined and can be imported

// This is the main class and this can be executed
public class StudentMainClass 
{

	public static void main(String[] args) 
	{
		/* First Student
		Student s1 = new Student(); // Creation of an object 
		
		s1.stdid = 001; // These don't make sense without s1 so ensure to use object  
		s1.stdname = "Abhijith";
		s1.stdmob = 732799400; // Long is taking only 9 numbers check why
		s1.m1 = 55;
		s1.m2 = 65;
		s1.m3 = 75;
		// Replace this previous statement with: s1.studenttotalmarks = s1.m1 + s1.m2 + s1.m3; 
		s1.studenttotalmarks = s1.calcTotalMarks();
		s1.stdaverage = s1.findAverage();
		
		// Replace the statement when increment function is called Student.noofstudents++; As a student has been added the value must go from zero to one
		Student.incStudent();
		
		s1.display(); // We have written what needs to be printed in the display() method along with object
		System.out.println("Total no of students: "+Student.noofstudents);
		
		// Second Student
		Student s2 = new Student(); // Creation of an object 
		
		s2.stdid = 002; // These don't make sense without s1 so ensure to use object  
		s2.stdname = "Manav";
		s2.stdmob = 256694726; // Long is taking only 9 numbers check why
		s2.m1 = 65;
		s2.m2 = 75;
		s2.m3 = 85;
		s2.studenttotalmarks = s2.calcTotalMarks();
		s2.stdaverage = s2.findAverage();
		
		Student.incStudent(); // Static Method should always be called with the class name
	
		s2.display(); // We have written what needs to be printed in the display() method along with object
		System.out.println("Total no of students: "+Student.noofstudents); */
		
		// 
/* We are trying to accept the data from the user dynamically by accepting from the user 
 * --> Import Scanner
 * --> Create a new scanner object		
 */
		// Object Creation
		Scanner sc = new Scanner(System.in); // System.in because we need to allow user to enter values from console
		// First Student
		Student s1 = new Student();
		System.out.println("Enter Student id: "); //001
		s1.stdid = sc.nextInt(); // Whatever string is given by user must be converted to integer so we use nextInt
		System.out.println("Enter Student Name: "); 
		s1.stdname = sc.next(); // String must remain a string so just use next
		System.out.println("Enter mobile number: ");
		s1.stdmob = sc.nextLong(); // String must be converted to long
		System.out.println("Enter M1 marks: ");
		s1.m1 = sc.nextInt();
		System.out.println("Enter M2 marks: ");
		s1.m2 = sc.nextInt();
		System.out.println("Enter M3 marks ");
		s1.m3 = sc.nextInt();
		// All the data has been taken now calculation of total and average needs to be done so
		s1.studenttotalmarks = s1.calcTotalMarks();
		s1.stdaverage = s1.findAverage(); // Average calculation
		Student.incStudent(); // Incrementing the no of students
		
		
		// Second Student
		Student s2 = new Student();
		System.out.println("Enter Student id: "); //001
		s2.stdid = sc.nextInt(); // Whatever string is given by user must be converted to integer so we use nextInt
		System.out.println("Enter Student Name: "); 
		s2.stdname = sc.next(); // String must remain a string so just use next
		System.out.println("Enter mobile number: ");
		s2.stdmob = sc.nextLong(); // String must be converted to long
		System.out.println("Enter M1 marks: ");
		s2.m1 = sc.nextInt();
		System.out.println("Enter M2 marks: ");
		s2.m2 = sc.nextInt();
		System.out.println("Enter M3 marks ");
		s2.m3 = sc.nextInt();
		// All the data has been taken now calculation of total and average needs to be done so
		s2.studenttotalmarks = s2.calcTotalMarks();
		s2.stdaverage = s2.findAverage(); // Average calculation
		Student.incStudent(); // Incrementing the no of students
		s1.display(); // Output display
		s2.display(); // Output display
		System.out.println("Total Number of Students: "+Student.noofstudents);
		
		
	}

}

