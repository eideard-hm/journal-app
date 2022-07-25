import JournalLayout from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { useChangePageTitle } from '../../hooks/useChangePageTitle';
import { FloatButton } from '../components';

const JournalPage = () => {
  useChangePageTitle('Journal');
  return (
    <JournalLayout>
      {/* NothingSelected */}
      <NothingSelectedView />

      {/* NoteView */}
      {/* <NoteView /> */}

      {/* Floating button */}
      <FloatButton />
    </JournalLayout>
  );
};

export default JournalPage;
