import { createContext, useCallback, useState } from 'react';

interface IFormContext {
  isOpen: boolean;
  toggleForm: () => void;
}

export const FormContext = createContext({} as IFormContext);

function FormProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = useCallback(() => {
    setIsOpen((opened) => !opened);
  }, [isOpen]);

  return (
    <FormContext.Provider value={{ isOpen, toggleForm }}>
      {children}
    </FormContext.Provider>
  );
}

export { FormProvider };
