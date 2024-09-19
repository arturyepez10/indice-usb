import useReduxStore from "./redux-store"

export const useFileParser = () => {
  const { state: { academics } } = useReduxStore();

  const exportJSON = () => {
    const data = new Blob([JSON.stringify(academics)], { type: 'application/json' });

    const url = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'indice-usb.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return {
    exportJSON
  }
}