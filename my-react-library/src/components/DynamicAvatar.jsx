import './Avatar.css'

// dynamic component
export default function DynamicAvatar(){
    const avatar = 'https://imgcdn.stablediffusionweb.com/2024/5/21/9e514cd7-5bb9-48ab-8bdf-9d0ce4b32efd.jpg';
    const description = 'Woman from the internet'
    return(
        <img 
        className='avatar'
        src={avatar} 
        alt={description} />
    )
}