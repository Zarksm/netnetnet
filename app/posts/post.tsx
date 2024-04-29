import Button from "../components/button";
import CardList  from "../components/cardList"

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Ipost {
    userId: number,
    id: number,
    title: string,
    body: string
}

const post = async () => {

    const response = await fetch(base_url)
    const posts: Ipost[] = await response.json()

  return (
    <div className="w-full flex flex-col gap-5">
        {posts.map((post) => (
            <CardList key={post.id}>
                <p>{post.id}</p>
                <p>{post.userId}</p>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Button userId={post.userId} />
            </CardList>
        ))}
    </div>
  )
}

export default post