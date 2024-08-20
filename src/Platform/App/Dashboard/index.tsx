import React, { useState } from 'react'
import Navbar from '../Shared/Navbar'
import { useAuth0 } from '@auth0/auth0-react';
import { useUserDetailsContext } from '../../../Context/UserDetailsContext';
import Loader from '../../../Shared/Loader';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, InputGroup, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../Shared/Card';
import ModelCard from './ModelCard';

const projects = [
  {
    id: 1,
    title: "Project A",
    description: "A brief description of Project A and what it entails.",
  },
  {
    id: 2,
    title: "Project B",
    description: "A brief description of Project B and what it entails.",
  },
  {
    id: 3,
    title: "Project C",
    description: "A brief description of Project C and what it entails.",
  },
  {
    id: 4,
    title: "Project D",
    description: "A brief description of Project D and what it entails.",
  },
  {
    id: 5,
    title: "Project E",
    description: "A brief description of Project E and what it entails.",
  },
  {
    id: 6,
    title: "Project F",
    description: "A brief description of Project F and what it entails.",
  },
  {
    id: 7,
    title: "Project F",
    description: "A brief description of Project F and what it entails.",
  },
];

const LoadingCard = () => {
  return (
    <Card className="transform transition-transform duration-300 hover:scale-105 w-full">
      <CardHeader className="w-full">
        <CardTitle className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4 animate-pulse">
        </CardTitle>
        <CardDescription className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4 animate-pulse mt-1" />
      </CardHeader>
      <CardContent>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4 animate-pulse mt-2"></div>
      </CardContent>
      <CardFooter className="flex justify-end items-center">
        <div className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercit
        </div>
      </CardFooter>
    </Card>
  )
}

// const AddModelCard = () => {
//   const { newPipelineLoading, createNewPipeline } = usePipelineContext();

//   return (
//       <button className="flex flex-col items-center justify-center p-6 border rounded-lg cursor-pointer transition-shadow hover:shadow-md bg-background h-full w-full" disabled={newPipelineLoading} onClick={createNewPipeline}>
//         {newPipelineLoading ? (
//           <div>
//             <Loader />
//           </div>
//         ) : (
//           <>
//             <FontAwesomeIcon icon={faPlus} className="h-12 w-12 text-muted-foreground mb-2" />
//             <span className="text-lg font-medium text-muted-foreground">
//               Run New Model
//             </span>
//           </>
//         )}
//       </button>
//   );
// }

const Dashboard = () => {
  const { user, isLoading } = useAuth0();
  const { loading, userDetails } = useUserDetailsContext();
  const [searchModels, setSearchModels] = useState<string>('');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleSearch = (e: any) => {
    setSearchModels(e.target.value)
    console.log(e)
  }

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen flex items-center justify-center">
        <Loader />
      </div>
      ) : (
    <div className="w-80per mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6 w-full">
        <div className="w-400p max-w-md">
            <FormGroup>
              <InputGroup>
                <InputGroupText>
                  <FontAwesomeIcon icon={faSearch} className="" />
                </InputGroupText>
                <Input
                  id="searchModels"
                  name="searchModels"
                  placeholder="Search Models...."
                  required
                  value={searchModels}
                  onChange={handleSearch}
                  />
              </InputGroup>
            </FormGroup>
        </div>
         <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
          <DropdownToggle caret>Sort By</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>ASC</DropdownItem>
            <DropdownItem>DESC</DropdownItem>
            <DropdownItem>Z-A</DropdownItem>
            <DropdownItem>A-Z</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-cols-3 gap-8">
        {loading ? (
          <>
            {projects.map((project, index) => (
              <LoadingCard
                key={index}
              />
            ))}
          </>
        ) : (
          <>
            {/* <AddModelCard /> */}
            {projects.map((model) => (
              <ModelCard
                key={model.id}
                id={model.id}
                title={model.title ?? 'No Title'}
                description={model.description ?? 'No Description Provided'}
                // createdAt={model.created_at}
                // link={model.short_link}
              />
            ))}
          </>
        )}
      </div>
    </div>
    )}
    </>
  );
};

const index = () => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col gap-4 p-8 md:gap-8 md:p-8 mt-100p">
          <Dashboard />
        </main>
      </div>
    </>
  )
}

export default index