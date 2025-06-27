// components/SocialLink.jsx

export default function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-2xl hover:text-coffee-300 transition-colors"
    >
      {icon}
    </a>
  )
}
