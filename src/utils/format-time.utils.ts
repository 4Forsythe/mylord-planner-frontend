export const formatTime = (countdown: number) => {
  const mins = Math.floor(countdown / 60)
  const secs = countdown % 60

  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}
