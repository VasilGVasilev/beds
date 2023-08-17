export const FBVideo = ({url}) => {
    return (
        <iframe className="border-none overflow-hidden" src={`${url}`} width="267" height="476" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    )
}