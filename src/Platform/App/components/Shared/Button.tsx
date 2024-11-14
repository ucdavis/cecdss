import React, { useEffect } from 'react'
import TooltipWrapper from '../../../../Shared/TooltipWrapper';
import { Button } from 'reactstrap';
import { URL_LANDING_PAGE } from '../../../../Resources/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

interface HomeButtonProps {
    loading: boolean;
    tooltipText: string;
    tooltipTarget: string;
}

export const HomeButton = ({ loading, tooltipText, tooltipTarget }: HomeButtonProps) => {
    
    useEffect(() => {
    const handleBeforeUnload = (event: { preventDefault: () => void; returnValue: string; }) => {
      if (loading) {
        event.preventDefault();
        event.returnValue = "Your model is still running. Are you sure you want to leave?";
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

  }, [loading]);

  return (
    <>
        <TooltipWrapper text={tooltipText} target={tooltipTarget} />
        <Button
        style={{ background: '#395442', borderColor: '#fff', height: '25px' }}
        href={URL_LANDING_PAGE}
        className='cursor-pointer flex items-center justify-center gap-x-2'
        id='goToHomeButton'
        >
        <FontAwesomeIcon icon={faHome} style={{ fontSize: '14px' }} />
        </Button>
    </>
  )
}
