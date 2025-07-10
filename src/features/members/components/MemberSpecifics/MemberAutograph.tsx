type Props = {
  autographUrl: string
  name?: string
}

export function MemberAutograph({ autographUrl }: Props) {
  if (!autographUrl)
    return null

  return (
    <div style={{ textAlign: 'center', margin: '1em 0' }}>
      <img src={autographUrl} />
    </div>
  )
}
