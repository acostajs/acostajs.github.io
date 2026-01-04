export function formatRepoDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatRelativeDate(dateString: string): string {
  return (
    new Date(dateString).toLocaleDateString("en-CA", {
      month: "short",
      day: "numeric",
    })
    + " · "
    + relativeTime(dateString)
  );
}

function relativeTime(dateString: string): string {
  const now = Date.now();
  const diff = now - new Date(dateString).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  if (days < 7) return `${days} days ago`;
  return `${days} days ago`;
}

export function topicURL(topic: string): string {
  const url = `https://github.com/topics/${topic}`;
  return url;
}
