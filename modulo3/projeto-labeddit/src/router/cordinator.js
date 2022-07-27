export const goToLoginPage = (navigate) => {
    navigate("/")
}

export const goToCadastrePage = (navigate) => {
    navigate("/cadastre")
}

export const goToFeedPage = (navigate) => {
    navigate("/feed")
}

export const goToPostPage = (navigate, id) => {
    navigate(`/post/${id}`)
}