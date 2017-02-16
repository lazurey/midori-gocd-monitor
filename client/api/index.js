const apiAddress = ''

export const formatResponse = (response) => {
  let jsonResponse
  try {
    jsonResponse = response.json()
  } catch (err) {
    throw new Error('bad json format')
  }

  return jsonResponse.then((json) => {
    const { status } = response
    const { message } = json
    return Promise.resolve({
      status, message, data: json
    })
  })
}

export const apiServer = apiAddress
