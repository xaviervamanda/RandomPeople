export function internalError() {
    return {
      type: "internalError",
      message: "Internal server error. Try again later."
    }
  }
  
export function notFoundError() {
  return {
    type: "notFoundError",
    message: "No data found."
  }
}