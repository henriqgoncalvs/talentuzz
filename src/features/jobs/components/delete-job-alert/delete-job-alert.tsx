import { DeleteIcon } from '@chakra-ui/icons';

import { Alert } from '@/components/alert';
import { Button } from '@/components/button';
import { useNotifications } from '@/stores/notifications';

import { useDeleteJob } from '../../api/delete-job';

type DeleteJobAlertProps = {
  jobId: string;
};

export const DeleteJobAlert = ({
  jobId,
}: DeleteJobAlertProps) => {
  const deleteJob = useDeleteJob();
  const { showNotification } = useNotifications();

  const handleDeleteJob = async (onClose: () => void) => {
    await deleteJob.submit({ jobId });
    showNotification({
      type: 'success',
      title: 'Success',
      duration: 5000,
      message: 'Job Deleted!',
    });
    onClose();
  };

  return (
    <Alert
      title="Delete Job"
      message="Are you sure you want to delete this job?"
      action={({ onClose }) => handleDeleteJob(onClose)}
      actionLabel="Delete"
      actionIsLoading={deleteJob.isLoading}
      triggerButton={
        <Button icon={<DeleteIcon />}>Delete</Button>
      }
    />
  );
};
