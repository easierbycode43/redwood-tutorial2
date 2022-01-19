import CommentForm from './CommentForm'

export const generated = () => {
  // call mockGraphQLMutation with the name of the mutation you want to intercept and then the function that will handle the interception and return a response
  mockGraphQLMutation('CreateCommentMutation', (variables, { ctx }) => {
    const id = parseInt(Math.random() * 1000)
    ctx.delay(1000)

    return {
      comment: {
        id,
        name: variables.input.name,
        body: variables.input.body,
        createdAt: new Date().toISOString(),
      },
    }
  })

  return (
    <div className="m-4">
      <CommentForm />
    </div>
  )
}

export default { title: 'Components/CommentForm' }
