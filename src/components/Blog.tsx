import type React from "react"
import Image from "next/image"

interface BlogPostProps {
  image: string
  categories: string[]
  title: string
  excerpt: string
  date: string
}

const BlogPost: React.FC<BlogPostProps> = ({ image, categories, title, excerpt, date }) => (
  <article className="flex flex-col w-full max-w-[343px]">
    <Image
      src={image || "/placeholder.svg"}
      className="object-cover w-full rounded-xl aspect-[1.56]"
      alt={title}
      width={343}
      height={220}
    />
    <div className="flex flex-col w-full font-medium">
      <div className="flex flex-wrap gap-2 items-start self-start mt-4 text-sm text-center whitespace-nowrap bg-white">
        {categories.map((category, index) => (
          <div key={index} className="gap-2.5 px-2 py-1 rounded bg-zinc-100">
            {category}
          </div>
        ))}
      </div>
      <h3 className="mt-5 text-3xl">{title}</h3>
    </div>
    <p className="mt-4 text-base tracking-normal overflow-hidden text-ellipsis">{excerpt}</p>
    <time className="mt-4 text-base tracking-normal text-black">{date}</time>
  </article>
)

const Blog: React.FC = () => {
  const blogPosts: BlogPostProps[] = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/caf9a30b898c301baace97e2f010c6caeafe1bf2dca57e129195eb74838936fc?apiKey=e6fa9547700c484dadaa2d943cc9301c&",
      categories: ["Salud", "Cardiología"],
      title: "Lorem ipsum dolor sit amet",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "22 de abril de 2023",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3bfe49712c42b24969f67fbaa33adfd898af61e7d7d38794527ed32939f576b4?apiKey=e6fa9547700c484dadaa2d943cc9301c&",
      categories: ["Salud", "Cardiología"],
      title: "Lorem ipsum dolor sit amet",
      excerpt:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "22 de abril de 2023",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6cbd2cd8d88da40e9bcc5e9d8d180545eb084f03eb92e86a94e8f6f81d1ef25e?apiKey=e6fa9547700c484dadaa2d943cc9301c&",
      categories: ["Salud", "Cardiología"],
      title: "Lorem ipsum dolor sit amet",
      excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "22 de abril de 2023",
    },
  ]

  return (
    <section className="w-full max-w-[1327px] mx-auto px-4 mb-20">
      <h2 className="mt-36 text-4xl font-medium text-center text-black max-md:mt-10 max-md:max-w-full">
        Descubre que es posible con maya
      </h2>
      <div className="mt-16 w-full max-md:mt-10">
        <div className="flex flex-wrap justify-center gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

