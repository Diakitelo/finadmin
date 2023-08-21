export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export function formatTime(date: Date) {
  return new Date(date).toLocaleTimeString('fr-FR', {
    hour: 'numeric',
    minute: 'numeric',
  });
}
