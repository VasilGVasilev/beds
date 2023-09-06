export const FBPicture = ({url}) => {
    return (
        <iframe className="" src={`${url}`} width="500" title="FBFrame" height="616" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    )
}