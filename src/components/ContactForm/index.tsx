import { FormContext } from '@/contexts/FormContext';
import { ArrowRight, Plus, Spinner, X } from '@phosphor-icons/react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { useTranslation } from 'next-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { Waves } from '../Patterns';

function ContactForm() {
  const { isOpen, toggleForm } = useContext(FormContext);
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: FormData) {
    setLoading(true);
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      await response.json();
      setLoading(false);

      toast.success(`${t('form.success_message')}`, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      reset();
    } catch {
      toast.error(`${t('form.error_message')}`, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }

  function handleReset(form) {}

  return (
    <>
      <div
        data-open={isOpen}
        onClick={toggleForm}
        className="bg-secondary-700/70 fixed hidden left-0 top-0 w-full h-full z-40 opacity-0 data-[open='true']:opacity-100 transition-all duration-500 data-[open='true']:block data-[open='true']:animate-fade-in"
      />
      <div
        data-open={isOpen}
        className="md:pt-7 pt-20 max-w-full fixed data-[open='true']:right-0 -right-[100%] top-0 p-7 bg-secondary-700 text-white z-50 md:min-w-[640px] h-full transition-all duration-500 overflow-y-auto"
      >
        <div className="absolute w-full left-0 top-0 overflow-hidden h-full z-0">
          <Waves className="-ml-[50%] mt-[20%] opacity-10" />
        </div>
        <div className="relative z-20">
          <button onClick={toggleForm} className="absolute -top-14 md:top-0">
            <X size={32} weight="regular" alt="close" />
          </button>

          <div className="max-w-md mx-auto md:pt-10">
            <h2 className="text-[2rem] text-white font-semibold">
              {t('form.title')}
            </h2>
            <p className="text-secondary-200 text-sm mt-2">
              {t('form.description')}
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div>
                <label
                  className="block text-white font-semibold py-2"
                  htmlFor="name"
                >
                  {t('form.fields.name.label')}
                </label>

                <input
                  type="text"
                  placeholder={t('form.fields.name.placeholder')}
                  {...register('name', { required: true })}
                />
              </div>

              <div>
                <label
                  className="block text-white font-semibold py-2"
                  htmlFor="email"
                >
                  {t('form.fields.email.label')}
                </label>
                <input
                  type="text"
                  placeholder={t('form.fields.email.placeholder')}
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />

                {errors.email?.type === 'required' && (
                  <div className="text-sm text-red-400 pt-2">
                    {t('form.fields.email.required_message')}
                  </div>
                )}

                {errors.email?.type === 'pattern' && (
                  <div className="text-sm text-red-400 pt-2">
                    {t('form.fields.email.required_message')}
                  </div>
                )}
              </div>

              <div>
                <label
                  className="block text-white font-semibold py-2"
                  htmlFor="message"
                >
                  {t('form.fields.message.label')}
                </label>
                <textarea
                  placeholder={t('form.fields.message.placeholder')}
                  {...register('message', { required: true })}
                />
              </div>

              <div className="flex gap-4 items-center flex-wrap md:flex-row flex-col md:justify-normal justify-center">
                <Button
                  type="submit"
                  className="!py-3 text-white md:w-auto w-full"
                >
                  {t('form.send_message')}{' '}
                  {isLoading ? (
                    <div className="animate-spin">
                      <Spinner size={20} />
                    </div>
                  ) : (
                    <ArrowRight size={20} />
                  )}
                </Button>
                <div className="text-sm text-center md:text-left">
                  <strong className="block whitespace-nowrap">
                    {t('form.or_send_mail')}
                  </strong>
                  <a
                    href={`mailto:${t('form.contact_email')}`}
                    className="text-primary-500"
                  >
                    {t('form.contact_email')}
                  </a>
                </div>
              </div>
            </form>

            <div className="text-center md:text-left md:flex-row flex-col mt-6 gap-6 flex border rounded-lg border-primary-600 bg-secondary-700 p-6 items-center justify-between">
              <div className="text-white">
                <span className="text-xl font-medium">
                  {t('form.highlight_primary.pre')}
                </span>
                <br />
                <span className="text-primary-400 text-sm whitespace-nowrap">
                  {t('form.highlight_primary.post')}
                </span>
              </div>
              <div>
                <Plus size={24} />
              </div>
              <div className="text-white">
                <span className="text-xl font-medium">
                  {t('form.highlight_secondary.pre')}
                </span>
                <br />
                <span className="text-primary-400 text-sm whitespace-nowrap">
                  {t('form.highlight_secondary.post')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export { ContactForm };
