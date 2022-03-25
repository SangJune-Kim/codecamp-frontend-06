export const getDate = (date) => {
    const newdate = new Date(date)
    const yyyy = newdate.getFullYear()
    const mm = newdate.getMonth() + 1
    const dd = newdate.getDate()
    return `${yyyy}-${String(mm).padStart(2,"0")}-${String(dd).padStart(2,"0")}`
}