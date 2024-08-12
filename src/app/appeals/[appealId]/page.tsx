import Appeal from '@/pages/Appeal';

type IAppealProps = {
  params: {
    appealId: string;
  };
};

const AppealPage = async ({ params }: IAppealProps) => {
  const { appealId } = params;

  return <Appeal idAppeal={appealId} />;
};

export default AppealPage;
