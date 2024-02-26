import { ClassNames } from "@emotion/react"
import "./home.scss"
import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
export default function Home() {
  return (
    <div classNames="home">
    <Stories/>
    <Posts/>
    </div>
  )
}
