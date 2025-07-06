import { ref, type Ref } from "vue"

const logMessages: Ref<Array<string>> = ref([]);

/**
 * Composable function that provides a reactive log message store and a logging function.
 *
 * @returns An object containing:
 * - `logMessages`: A reactive array of log messages.
 * - `log`: A function to add a new message to the log.
 */
export const useLog = () => {
  
  /**
   * Appends a new log message to the `logMessages` array.
   *
   * @param message - The message string to be logged.
   */
  const log = (message: string) => {
    logMessages.value.push(message);
  }

  /**
   * Resets the log by clearing all log messages.
   *
   * Sets the `logMessages` array to an empty array, effectively removing all existing log entries.
   */
  const resetLog = () => { logMessages.value = []; }

  return { logMessages, log, resetLog }
}