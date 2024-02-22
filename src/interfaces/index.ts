interface PopupProps {
  title: string;
  images: string[];
  description: string[];
  onClose: () => void;
}

interface LinkPopupProps {
  title: string;
  onClose: () => void;
}

interface NameProps {
  name: string;
}
interface FacilityMap {
  name: string;
  position: [number, number];
  visible: boolean;
}

interface ContainerProps {
  setName: (name: string) => void;
}

interface Facility {
  name: string;
  position: [number, number];
}

export type {
  PopupProps,
  ContainerProps,
  Facility,
  NameProps,
  FacilityMap,
  LinkPopupProps,
};
