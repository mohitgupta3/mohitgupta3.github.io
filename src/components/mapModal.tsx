import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";

const MapModal = ({
  showMapModal,
  setShowMapModal,
}: {
  showMapModal: boolean;
  setShowMapModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showMapModal} setShowModal={setShowMapModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
            <div></div>
          {/* <a href="https://precedent.dev">
            <Image
              src="/logo.png"
              alt="Precedent Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a> */}
          <h3 className="font-display text-2xl font-bold">Precedent</h3>
          <p className="text-sm text-gray-500">
            Precedent is an opinionated collection of components, hooks, and
            utilities for your Next.js project.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useMapModal() {
  const [showMapModal, setShowMapModal] = useState(false);

  const MapModalCallback = useCallback(() => {
    return (
      <MapModal
        showMapModal={showMapModal}
        setShowMapModal={setShowMapModal}
      />
    );
  }, [showMapModal, setShowMapModal]);

  return useMemo(
    () => ({ setShowMapModal, MapModal: MapModalCallback }),
    [setShowMapModal, MapModalCallback],
  );
}