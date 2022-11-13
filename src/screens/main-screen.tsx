import React, { useCallback, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { VStack, useColorModeValue, Fab, Icon } from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import shortid from 'shortid'
import TaskList from '../components/task-list'
import AnimatedColorBox from '../components/animated-color-box'
import Masthead from '../components/masthead'
import Navbar from '../components/navbar'

interface TaskItemData {
  id: string
  subject: string
  done: boolean
}
const initialData = [
  {
    id: shortid.generate(),
    subject: 'Hello It is first task',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Make a React Native App',
    done: false
  }
]
export default function MainScreen() {
  const [data, setData] = useState(initialData)
  const [editingItemId, setEditingItemId] = useState<string | null>(null)

  const handleToggleTaskItem = useCallback((item: any) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done
      }
      return newData
    })
  }, [])
  const handleChangeTaskItemSubject = useCallback(
    (item: TaskItemData, newSubject: string) => {
      setData(prevData => {
        const newData = [...prevData]
        const index = prevData.indexOf(item)
        newData[index] = {
          ...item,
          subject: newSubject
        }
        return newData
      })
    },
    []
  )

  const handleFinishEditingTaskItem = useCallback((_item: TaskItemData) => {
    setEditingItemId(null)
  }, [])

  const handlePressTaskItemLabel = useCallback((item: TaskItemData) => {
    setEditingItemId(item.id)
  }, [])

  const handleRemoveItem = useCallback((item: TaskItemData) => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item)
      return newData
    })
  }, [])

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w="full"
    >
      <Masthead
        title="Sky Forgive Me pls "
        image={require('../assets/masthead.png')}
      >
        <Navbar />
      </Masthead>

      <VStack
        space={1}
        flex={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        borderTopLeftRadius="20px"
        pt="20px"
        pr="20px"
      >
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />

        <ThemeToggle />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = shortid.generate()
          setData([
            {
              id,
              subject: '',
              done: false
            },
            ...data
          ])
          setEditingItemId(id)
        }}
      />
    </AnimatedColorBox>
  )
}
