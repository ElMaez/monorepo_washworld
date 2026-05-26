import Image from "next/image"
import type { User } from "@/app/global/types/global"

type Props = { user : User};

export default function PersonalOverview({user}: Props){
    const memberSince = new Date(user.user_created_at * 1000).toLocaleDateString();
    return (
        <article>
            <header>
                <h2>{user.user_fullname}</h2>
            <p>Medlem siden <time dateTime={new Date(user.user_created_at * 1000).toDateString()}>{memberSince}</time></p>
            </header>
            <figure>
                <img src="#" alt={user.user_fullname} />
            </figure>
        </article>
    )
}