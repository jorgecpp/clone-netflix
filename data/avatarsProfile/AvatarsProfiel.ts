const AvatarsProfiel = [
    {
        avatarUrl: '/profiles/profile-1.png'
    },
    {
        avatarUrl: '/profiles/profile-2.png'
    },
    {
        avatarUrl: '/profiles/profile-3.png'
    },
    {
        avatarUrl: '/profiles/profile-4.png'
    }
]

export const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random()*AvatarsProfiel.length);
    return AvatarsProfiel[randomIndex]
}
