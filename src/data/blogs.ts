export interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  thumbnail: string;
  content: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    description: "Learn how to set up a modern React application with TypeScript and best practices for type safety.",
    author: "Sarah Johnson",
    date: "2024-03-10",
    thumbnail: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "TypeScript has become an essential tool in modern React development. It provides type safety, better IDE support, and helps catch errors early in the development process. In this comprehensive guide, we'll explore how to set up a React project with TypeScript and implement best practices for maintainable code. We'll cover component typing, props interfaces, hooks with TypeScript, and common patterns that will make your development experience smoother and more productive."
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS for Modern Web Design",
    description: "Discover how to create beautiful, responsive designs using Tailwind CSS utility classes.",
    author: "Michael Chen",
    date: "2024-03-08",
    thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "Tailwind CSS has revolutionized the way we approach styling in web development. Instead of writing custom CSS, we can use utility classes to rapidly build custom designs. This article explores the benefits of Tailwind CSS, including its mobile-first approach, customization capabilities, and how it promotes consistent design across your application. We'll also dive into advanced techniques like creating custom utilities, using the @apply directive, and optimizing your production build for the smallest possible file size."
  },
  {
    id: 3,
    title: "Building Scalable Applications with React Router",
    description: "A complete guide to implementing navigation and routing in your React applications.",
    author: "Emily Rodriguez",
    date: "2024-03-05",
    thumbnail: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "React Router is the standard routing library for React applications. It enables navigation between different views, handles URL parameters, and provides a seamless single-page application experience. In this guide, we'll cover the fundamentals of React Router including route configuration, nested routes, protected routes, and navigation patterns. You'll learn how to structure your routes for maximum scalability and create a navigation experience that delights your users while maintaining clean, maintainable code."
  },
  {
    id: 4,
    title: "The Power of React Hooks",
    description: "Explore the most important React hooks and how they can simplify your component logic.",
    author: "David Park",
    date: "2024-03-02",
    thumbnail: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "React Hooks transformed how we write React components by allowing us to use state and other React features without writing class components. This article provides an in-depth look at the most commonly used hooks: useState, useEffect, useContext, useRef, and useMemo. We'll explore practical examples, common pitfalls to avoid, and best practices for creating custom hooks. By the end of this guide, you'll have a solid understanding of how to leverage hooks to write cleaner, more maintainable React code."
  },
  {
    id: 5,
    title: "Optimizing React Performance",
    description: "Learn techniques to make your React applications faster and more efficient.",
    author: "Jennifer Lee",
    date: "2024-02-28",
    thumbnail: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "Performance optimization is crucial for creating smooth, responsive React applications. This comprehensive guide covers essential optimization techniques including React.memo for component memoization, useMemo and useCallback hooks for expensive computations, code splitting with lazy loading, and virtual scrolling for large lists. We'll also explore Chrome DevTools for performance profiling, identifying bottlenecks, and measuring the impact of your optimizations. These techniques will help you build React applications that deliver exceptional user experiences even under heavy load."
  },
  {
    id: 6,
    title: "Modern State Management in React",
    description: "Compare different state management solutions and choose the right one for your project.",
    author: "Alex Turner",
    date: "2024-02-25",
    thumbnail: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: "State management is one of the most critical aspects of building React applications. With options like Context API, Redux, Zustand, and Jotai, choosing the right solution can be overwhelming. This article provides a comprehensive comparison of different state management approaches, their pros and cons, and when to use each one. We'll examine real-world scenarios, discuss performance implications, and provide practical examples that you can apply to your own projects. Whether you're building a small app or a large enterprise application, you'll learn how to make informed decisions about state management."
  }
];
