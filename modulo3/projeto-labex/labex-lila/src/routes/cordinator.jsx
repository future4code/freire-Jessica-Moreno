export const goToHomePage = (navigate) => {
    navigate("/")
}
export const goToTripListPage = (navigate) => {
    navigate("/trip-list")
}
export const goToApplicationPage = (navigate) => {
    navigate("/application")
}
export const goToLoginPage = (navigate) => {
    navigate("/login")
}
export const goToAdmHomePage = (navigate) => {
    navigate("/adm-home-page")
}
export const goToDetailsTripPage = (navigate, id) => {
    navigate(`/details-trip/${id}`)
}
export const goToCreateTripPage = (navigate) => {
    navigate("/create-trip")
}
export const goToErrorPage = (navigate) => {
    navigate("/*")
}
export const goBack = (navigate) => {
    navigate(-1)
}