import BlogLayout from './BlogLayout'

export const loggedIn = () => {
  mockCurrentUser({ email: 'daniel@community43.org' })

  return <BlogLayout />
}

export const loggedOut = () => {
  return <BlogLayout />
}

export default { title: 'Layouts/BlogLayout' }
