import { Formik } from 'formik';
import {
  SearchBar,
  FormSearch,
  Btn,
  BtnLabel,
  Input,
  Icon,
} from './Searchbar.styled';
import * as Yup from 'yup';

const sсhema = Yup.object().shape({
  query: Yup.string().required('Name is required field.'),
});

const initialValues = { query: '' };

interface ISearchbarProp {
  onSubmit: (query: string) => void;
}

export const Searchbar: React.FC<ISearchbarProp> = ({ onSubmit }) => {
  const handleSubmit = (
    { query }: { query: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    onSubmit(query);

    resetForm();
  };

  return (
    <SearchBar>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={sсhema}
      >
        <FormSearch>
          <Btn type="submit">
            <Icon />
            <BtnLabel>Search</BtnLabel>
          </Btn>

          <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormSearch>
      </Formik>
    </SearchBar>
  );
};
