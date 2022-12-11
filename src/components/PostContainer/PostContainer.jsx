import "./postcontainer.scss"
import { Post } from "../Post/Post"

export const PostContainer = () => {
  const posts = [
    {
      id: 1,
      logo: "https://ph-files.imgix.net/7c9e87c4-bc1e-42d6-b314-41e42cd28bea.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&bg=0fff&dpr=1",
      title: "HowToReplyTo.com",
      shortDesc: "AI-powered replies for every message",
      description: `The ultimate AI-powered tool for generating funny, rude, emotional & casual replies for every message. Tailor your replies to your audience, culture & context, and add emojis and follow-up questions with a simple checkbox.
      Launched in Productivity, Messaging, Entertainment by
      HowToReplyTo.com`,
      type: "Free",
      link: "https://mui.com/",
      category: "Productivity",
      comments: 23,
      upvotes: 128
    },
    {
      id: 2,
      logo: "https://ph-files.imgix.net/53a39437-599c-4a36-aef5-0e8c692db73f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&bg=0fff&dpr=1",
      title: "Prompt Toolkit",
      shortDesc: "A tool to search and submit ChatGPT commands",
      type: "Free",
      link: "https://mui.com/",
      description: `The ultimate AI-powered tool for generating funny, rude, emotional & casual replies for every message. Tailor your replies to your audience, culture & context, and add emojis and follow-up questions with a simple checkbox.
      Launched in Productivity, Messaging, Entertainment by
      HowToReplyTo.com`,
      category: "Artificial Intelligence",
      comments: 12,
      upvotes: 32
    },
    {
      id: 3,
      logo: "https://ph-files.imgix.net/bd188690-f308-423b-b146-17aea2807021.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&bg=0fff&dpr=1",
      title: "QueryJar",
      shortDesc: "Your personal SQL Monkey",
      type: "Free",
      link: "https://mui.com/",
      description: `The ultimate AI-powered tool for generating funny, rude, emotional & casual replies for every message. Tailor your replies to your audience, culture & context, and add emojis and follow-up questions with a simple checkbox.
      Launched in Productivity, Messaging, Entertainment by
      HowToReplyTo.com`,
      category: "Analytics",
      comments: 10,
      upvotes: 322
    },
    {
      id: 4,
      logo: "https://ph-files.imgix.net/bd188690-f308-423b-b146-17aea2807021.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&bg=0fff&dpr=1",
      title: "QueryJar",
      shortDesc: "Your personal SQL Monkey",
      type: "Free",
      link: "https://mui.com/",
      description: `The ultimate AI-powered tool for generating funny, rude, emotional & casual replies for every message. Tailor your replies to your audience, culture & context, and add emojis and follow-up questions with a simple checkbox.
      Launched in Productivity, Messaging, Entertainment by
      HowToReplyTo.com`,
      category: "Analytics",
      comments: 10,
      upvotes: 322
    },
    {
      id: 5,
      logo: "https://ph-files.imgix.net/bd188690-f308-423b-b146-17aea2807021.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&bg=0fff&dpr=1",
      title: "QueryJar",
      shortDesc: "Your personal SQL Monkey",
      type: "Free",
      link: "https://mui.com/",
      description: `The ultimate AI-powered tool for generating funny, rude, emotional & casual replies for every message. Tailor your replies to your audience, culture & context, and add emojis and follow-up questions with a simple checkbox.
      Launched in Productivity, Messaging, Entertainment by
      HowToReplyTo.com`,
      category: "Analytics",
      comments: 10,
      upvotes: 322
    },
    {
      id: 6,
      logo: "https://ph-files.imgix.net/bd188690-f308-423b-b146-17aea2807021.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&bg=0fff&dpr=1",
      title: "QueryJar",
      shortDesc: "Your personal SQL Monkey",
      type: "Free",
      link: "https://mui.com/",
      description: `The ultimate AI-powered tool for generating funny, rude, emotional & casual replies for every message. Tailor your replies to your audience, culture & context, and add emojis and follow-up questions with a simple checkbox.
      Launched in Productivity, Messaging, Entertainment by
      HowToReplyTo.com`,
      category: "Analytics",
      comments: 10,
      upvotes: 322
    },
    {
      id: 7,
      logo: "https://ph-files.imgix.net/bd188690-f308-423b-b146-17aea2807021.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&bg=0fff&dpr=1",
      title: "QueryJar",
      shortDesc: "Your personal SQL Monkey",
      type: "Free",
      link: "https://mui.com/",
      description: `The ultimate AI-powered tool for generating funny, rude, emotional & casual replies for every message. Tailor your replies to your audience, culture & context, and add emojis and follow-up questions with a simple checkbox.
      Launched in Productivity, Messaging, Entertainment by
      HowToReplyTo.com`,
      category: "Analytics",
      comments: 10,
      upvotes: 322
    },
    {
      id: 8,
      logo: "https://ph-files.imgix.net/bd188690-f308-423b-b146-17aea2807021.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&bg=0fff&dpr=1",
      title: "QueryJar",
      shortDesc: "Your personal SQL Monkey",
      type: "Free",
      link: "https://mui.com/",
      description: `The ultimate AI-powered tool for generating funny, rude, emotional & casual replies for every message. Tailor your replies to your audience, culture & context, and add emojis and follow-up questions with a simple checkbox.
      Launched in Productivity, Messaging, Entertainment by
      HowToReplyTo.com`,
      category: "Analytics",
      comments: 10,
      upvotes: 322
    },
  ]
  return (
    <div className="postContainer">
      {posts.map(post => <Post post={post} key={post.id} />)}
    </div>
  )
}
